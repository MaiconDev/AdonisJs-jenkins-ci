pipeline {
    agent none
    environment {
        CI = 'true'
    }
    stages {
        stage('Docker UP') { 
            steps {
                sh 'docker-compose up' 
            }
        }

        stage('Build') { 
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