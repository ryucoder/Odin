#!/bin/bash

#dolphin ./Projects/Odin-angular/
#dolphin ./Projects/Odin-django/

# use absolute path
PROJECTS="/home/ryucoder/Desktop/Projects/"
ANGULAR="/home/ryucoder/Desktop/Projects/Odin-angular/"
DJANGO="/home/ryucoder/Desktop/Projects/Odin-django/"
ODIN="/home/ryucoder/Desktop/Projects/Odin.code-workspace"

code $ODIN

konsole --hold --new-tab -p tabtitle=Angular --workdir=$ANGULAR &
konsole --hold --new-tab -p tabtitle=Angular-Server --workdir=$ANGULAR -e "npm start"  &
konsole --hold --new-tab -p tabtitle=Django --workdir=$DJANGO &
konsole --hold --new-tab -p tabtitle=Django-Server --workdir=$DJANGO -e bash -c -l -i "python3 manage.py runserver" &

# konsole --hold --new-tab -e "ls -la"



