# team
    Product owner: Filip Baginski
    System architecture and design: Jan Mikos
    Back-end: Grzegorz Matyja
    Front-end: we are waiting for you <3

# key-words
    microservice architecture, social media, geo-tagging, privacy, quality content

# about project
    Zlapka is final project in our one year bootcamp - Codecool - curiculum. This time we are challenging ouerselves
    to use all obtained skills in creating multi-language (Java EE, plpgsql, C#, Type Script) project based on 
    microservice architecture working in agile methodology. In this approach we are trying to maximize:
    - security
    - usability 
    - modularity
    - interchangeability

# component repositories:
    Database (menages shared database, needs update - sheduled for 23 XI sprint) [python, plpgsql, pgsql]:
        github.com/pirat77/zlapka_db
    Event component (just component structure would be extended in first december sprint) [JAVA EE, Spring]:
        github.com/pirat77/ZlapkaEventComponent
    Other components (to be created):
        -auth server (menaging permissions and user verification)
        -user component (menaging user data)
        -scoring component (menaging scoring algorithm meant for maximalization of content quality)
        -ephemeral component (menaging events outside of planet earth scope)
        -group boards component (menaging message boards)
        -chat relay component (menaging secure end to end encrypted p2p communication beetween users)
        -admin panel (menaging admin actions, fully independent from other components)
        -mod panel (menaging moderator actions, fully independent from other comopnents)
        
# zlapka-main
    Component diagram:
![ZlapkaComponentDiagram.png](/media/ZlapkaComponentDiagram.png)
# authentication
    authentication protocol:
![authentication.png](/media/authentication.png)

# whose for? 