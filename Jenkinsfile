pipeline {
    agent {
        docker {
            image 'node:10.15.0-alpine' 
            args '-p 3333:3333' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            agent {
                docker {
                    image 'postgres:9.6' 
                    args '-p 5432:5432' 
                }
            }
            steps {
                sh 'npm install' 
                sh 'npm start' 
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