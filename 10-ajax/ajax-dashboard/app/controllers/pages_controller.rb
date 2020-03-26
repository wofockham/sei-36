class PagesController < ApplicationController
  def home
    @brother = %w( Groucho Harpo Chico ).sample
    @time = Time.now
    @uptime = `uptime` # This won't on Heroku
  end
end
