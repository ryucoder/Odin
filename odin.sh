#!/bin/bash

# Use absolute path
PROJECTS="/home/$USER/Desktop/Projects/"
ANGULAR="/home/$USER/Desktop/Projects/Odin-angular/"
DJANGO="/home/$USER/Desktop/Projects/Odin-django/"
ODIN="/home/$USER/Desktop/Projects/Odin.code-workspace"


# Opens the VS Code Text Editor
code $ODIN


konsole --new-tab --hold -p tabtitle=Angular --workdir=$ANGULAR &
konsole --new-tab --hold -p tabtitle=Angular-Server --workdir=$ANGULAR -e bash -c "npm start; bash"   &
konsole --new-tab --hold -p tabtitle=Django --workdir=$DJANGO &
konsole --new-tab --hold -p tabtitle=Django-Server --workdir=$DJANGO -e bash -c "python3 manage.py runserver; bash" &
