
  Pod::Spec.new do |s|
    s.name = 'CapacitorGoogleNearby'
    s.version = '0.0.1'
    s.summary = 'Plugin to leverage the API for communication with nearby devices.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/trancee/capacitor-google-nearby.git'
    s.author = 'Philipp Grosswiler'
    s.source = { :git => 'https://github.com/trancee/capacitor-google-nearby.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end