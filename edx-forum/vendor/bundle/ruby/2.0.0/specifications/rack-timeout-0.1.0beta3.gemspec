# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rack-timeout"
  s.version = "0.1.0beta3"

  s.required_rubygems_version = Gem::Requirement.new("> 1.3.1") if s.respond_to? :required_rubygems_version=
  s.authors = ["Caio Chassot"]
  s.date = "2013-07-01"
  s.description = "Rack middleware which aborts requests that have been running for longer than a specified timeout."
  s.email = "dev@caiochassot.com"
  s.homepage = "http://github.com/kch/rack-timeout"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "Abort requests that are taking too long"
end
