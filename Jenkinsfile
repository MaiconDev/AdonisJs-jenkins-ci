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
            steps {
                sh 'npm install dredd@stable'
                sh 'node_modules/dredd/bin/dredd --reporter junit --output blueprint.xml'
            }
        }

        stage('Get JUnit Results') {
            steps {
                junit 'blueprint.xml'
            }
        }
    }
}