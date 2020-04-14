# 5. [8] Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

# Try solving this one without regular expressions

# Captures: (.)
# Backreferences: \1 refers to the character(s) matched in the first capture group.
# \1

ARGF.each do |line|
  puts line if line =~ /(.)\1/ # Match any character followed by that same character
end
