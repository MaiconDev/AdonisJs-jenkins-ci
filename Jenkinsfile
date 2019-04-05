pipeline {
    agent {
        docker {
            image 'node:10.15.0-alpine' 
            args '-p 3333:3333 --network custom' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm start' 
            }
        }
        
        stage('Test API Blueprint') {    
            steps {
                sh 'npm install dredd@stable'
                sh 'node_modules/dredd/bin/dredd'
            }
        }

        stage('Get JUnit Results') {
            steps {
                junit 'blueprint.xml'
            }
        }
    }
}