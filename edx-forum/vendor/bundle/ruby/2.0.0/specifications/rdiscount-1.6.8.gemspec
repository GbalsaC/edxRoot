# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rdiscount"
  s.version = "1.6.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Ryan Tomayko", "David Loren Parsons", "Andrew White"]
  s.date = "2011-01-25"
  s.email = "rtomayko@gmail.com"
  s.executables = ["rdiscount"]
  s.extensions = ["ext/extconf.rb"]
  s.extra_rdoc_files = ["COPYING"]
  s.files = ["bin/rdiscount", "COPYING", "ext/extconf.rb"]
  s.homepage = "http://github.com/rtomayko/rdiscount"
  s.require_paths = ["lib"]
  s.rubyforge_project = "wink"
  s.rubygems_version = "2.0.14"
  s.summary = "Fast Implementation of Gruber's Markdown in C"
end
