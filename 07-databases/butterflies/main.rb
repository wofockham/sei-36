require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterflies = db.execute 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE
post '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.execute "INSERT INTO butterflies (name, family, image) VALUES '#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }'"
  redirect to('/butterflies')
end

# SHOW
get '/butterflies/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }" # Array
  @butterfly = @butterfly.first
  erb :butterflies_show
end
