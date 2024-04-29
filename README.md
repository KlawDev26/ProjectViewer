# ProjectViewer
Projet pour répertorier mes projets : 

projets référencés grâce au sous rép dans mon github perso.
Site servant d'aperçu pour mes projets en cours, mes idées et les projets complétés.


Interface type blog : 

- Page d'acceuil avec liste des projets, tri selon état d'avancement (prévu / en cours / terminé)
- page de détails par projet (Titre, desc, date de l'idée, fichiers liés/lien github)
- page pour ajouter un projet ( Titre, desc, lien rep github).


Fonctionnalités : 

Ajouter une idée / projet
- Prérequis :
		- Repo GitHub a son nom
		- Titre
		- Description de l'idée
	- Actions :
		- Ajouter projet à BDD
		- Ajouter page pour projet

Modifier l'état d'un projet
- Prérequis :
		- Projet existe
- Actions :
		- Changer values dans BDD pour projet

Afficher Tous les Projets : 
- Prérequis :
		- Récup liste des projets
- Actions :
		- afficher éléments light pour chaque projet (Titre, desc tronquée, lien vers la page, lien vers Github / site fonctionnel)

Afficher le détail d'un Projet : 
- Prérequis : 
		- Récupérer les infos du projet
- Actions : 
		- Afficher une page avec toutes les infos du projet (Titre, desc, lien repo Github, lien siter fonctionnel)
