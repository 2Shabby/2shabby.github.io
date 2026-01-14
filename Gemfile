# Gemfile for local development
# GitHub Pages uses its own gem versions, but this ensures local parity

source "https://rubygems.org"

# Use github-pages gem for maximum compatibility
gem "github-pages", group: :jekyll_plugins

# Windows and JRuby timezone support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb for JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
