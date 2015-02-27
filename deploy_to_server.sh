#!/bin/bash 

##############################################################
##                                                          ##
## THIS SCRIPT IS DESIGNED TO DEPLOY THE CURRENT PROJECT TO ##
## A NGINX SERVER IN AN UNIX ENVIRONMENT                    ##
##                                                          ##
##############################################################

PROJECT_NAME=${PWD##*/}

## Must fix to your local server deployment location
DEPLOYMENT_LOCATION="/usr/share/nginx/html/${PROJECT_NAME}"

## Checks if exists the folder, if not, then create it

if [ ! -d DEPLOYMENT_LOCATION ]; then
    echo "Creating folder ${DEPLOYMENT_LOCATION}"
    mkdir $DEPLOYMENT_LOCATION
fi

project_location=`pwd`
project_location="${project_location}/"

## Just to separate the directoy path from the files path  

project_files_location="${project_location}*"

echo "

project_files_location:
${project_files_location}

DEPLOYMENT_LOCATION:
${DEPLOYMENT_LOCATION} 

"
## Here's where the magic happens

cp -R $project_files_location $DEPLOYMENT_LOCATION  