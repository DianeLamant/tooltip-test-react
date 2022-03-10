# La création d’un composant tooltip

Création d'un composant Tooltip permettant d'avoir des informations complémentaires sur des actions, inputs de formulaire ou autre.

Le composant prend en paramètre le texte à afficher à l'utilisateur. Il est en position absolue et son parent doit donc être en position relative pour que le Tooltip s'affiche au dessus de celui-ci.

Il a une taille minimal et maximale, sa position est donc calculé par rapport à la height du tooltip qui peut être plus ou moins grand suivant la longueur du texte.