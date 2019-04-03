pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        
        stage('Test API Blueprint') {
            if(isUnix()) {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                sh 'dredd --config ./api-blueprint/dredd.yml --reporter junit --output blueprint.xml'
                }
            } else {
                bat 'dredd --config ./api-blueprint/dredd.yml --reporter junit --output blueprint.xml'
            }
        }
    }
}