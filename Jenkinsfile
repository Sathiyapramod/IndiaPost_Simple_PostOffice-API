pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'sathiyapramod', usernameVariable: 'sathiyapramod', passwordVariable: 'PASSWORD')]) {
                    git branch: 'master', credentialsId: 'sathiyapramod', url: 'https://github.com/Sathiyapramod/IndiaPost_Simple_PostOffice-API.git'
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
    }
}
