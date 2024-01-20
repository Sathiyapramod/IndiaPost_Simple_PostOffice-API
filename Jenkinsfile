pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
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
