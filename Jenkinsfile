pipeline {
  agent {
    docker {
      image 'node:9.2'
    }
    
  }
  stages {
    stage('build') {
      steps {
        build 'npm install'
      }
    }
  }
}