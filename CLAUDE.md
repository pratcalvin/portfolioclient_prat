# CLAUDE.md — INSTRUCTIONS DE TRAVAIL

## 1. RÈGLE ABSOLUE : TRAVAILLER AVEC LE PROJET EXISTANT

Tu travailles directement sur les fichiers de ce projet.

Le contenu réel du projet est ta source de vérité principale.

Avant de poser une question ou de proposer du code :

1. Cherche les fichiers concernés.
2. Lis le code existant nécessaire.
3. Comprends la structure actuelle.
4. Identifie les dépendances entre les fichiers concernés.
5. Agis directement si la demande est suffisamment claire.

**Ne me demande jamais de copier-coller un fichier que tu peux lire toi-même.**

Ne recrée pas le contexte déjà présent dans les fichiers.

---

## 2. OPTIMISATION DU CONTEXTE ET DES TOKENS

Le contexte est une ressource limitée. Utilise-le intelligemment.

### À FAIRE

- Chercher d'abord dans les fichiers du projet.
- Lire uniquement les fichiers pertinents.
- Lire uniquement les portions nécessaires lorsque c'est possible.
- Réutiliser les informations déjà disponibles dans le projet.
- Garder les réponses courtes et directement utiles.
- Passer rapidement à l'action lorsque la demande est claire.

### À ÉVITER

- Lire tout le projet sans raison.
- Répéter du code déjà visible.
- Recopier de longs fichiers dans tes réponses.
- Expliquer des concepts que je n'ai pas demandé d'expliquer.
- Faire de longues introductions.
- Reformuler ma demande inutilement.
- Donner plusieurs solutions complexes lorsqu'une solution simple suffit.
- Créer du contexte artificiel.
- Poser une question dont la réponse peut être trouvée dans les fichiers.

**Principe : minimum de contexte nécessaire → maximum d'action utile.**

---

## 3. NE PAS POSER DE QUESTION INUTILE

Si ma demande est suffisamment claire pour agir, agis directement.

Ne me demande pas :

- où se trouve un fichier si tu peux le rechercher ;
- de t'envoyer le code si tu peux le lire ;
- quelle technologie est utilisée si tu peux l'identifier ;
- comment fonctionne une partie du projet si tu peux l'inspecter ;
- de confirmer une modification évidente.

Pose une question uniquement lorsqu'une information réellement indispensable manque.

Si plusieurs interprétations sont possibles mais qu'une interprétation est clairement cohérente avec le projet actuel, utilise-la et avance.

Si une décision importante pourrait modifier fortement l'architecture ou le résultat, demande confirmation avant de faire une modification lourde.

---

## 4. AVANT CHAQUE MODIFICATION

Avant de modifier du code :

### Étape 1 — LOCALISER

Trouve précisément les fichiers concernés.

### Étape 2 — COMPRENDRE

Lis suffisamment de contexte pour comprendre :

- la structure ;
- les composants concernés ;
- les fonctions utilisées ;
- les dépendances ;
- les styles existants ;
- les conventions du projet.

### Étape 3 — VÉRIFIER

Cherche si une fonctionnalité similaire existe déjà.

**Réutilise l'existant avant de créer quelque chose de nouveau.**

### Étape 4 — MODIFIER

Fais uniquement les changements nécessaires à ma demande.

---

## 5. MODIFIER L'EXISTANT AVANT DE CRÉER

Priorité :

**réutiliser > modifier > étendre > créer**

Ne crée pas :

- un nouveau composant ;
- une nouvelle fonction ;
- un nouveau fichier ;
- une nouvelle dépendance ;
- une nouvelle architecture

si l'existant peut raisonnablement être réutilisé.

Évite les doublons.

---

## 6. PETITS CHANGEMENTS, IMPACT LIMITÉ

Pour une demande ciblée, effectue une modification ciblée.

Ne profite pas d'une petite demande pour :

- refactoriser tout le projet ;
- changer l'architecture ;
- renommer des dizaines de fichiers ;
- modifier des fonctionnalités non demandées ;
- installer des dépendances inutiles ;
- réécrire du code fonctionnel.

Si tu détectes une amélioration indépendante de la demande, signale-la brièvement à la fin au lieu de la faire automatiquement.

---

## 7. PRÉSERVER L'EXISTANT

Toute modification doit préserver autant que possible :

- les fonctionnalités existantes ;
- le responsive ;
- l'accessibilité ;
- le comportement JavaScript ;
- les styles existants ;
- les performances ;
- la structure du projet.

Ne casse pas une fonctionnalité existante pour en ajouter une nouvelle.

Si une modification risque de casser quelque chose, vérifie les dépendances avant de l'appliquer.

---

## 8. DESIGN ET INTERFACE

Pour les modifications visuelles :

- respecte le design existant ;
- réutilise les variables, classes et composants déjà présents ;
- respecte les espacements existants ;
- respecte la typographie existante ;
- respecte la hiérarchie visuelle ;
- conserve la cohérence desktop/mobile.

Ne transforme pas arbitrairement le design simplement parce qu'une autre approche serait possible.

Si je demande explicitement une refonte, alors tu peux modifier plus largement.

---

## 9. RESPONSIVE

Toute modification d'interface doit être pensée pour :

- mobile ;
- tablette ;
- desktop.

Ne corrige pas uniquement la version desktop.

Si une modification CSS peut provoquer un problème sur une autre taille d'écran, vérifie les règles responsive concernées.

---

## 10. CODE

Privilégie :

- simplicité ;
- lisibilité ;
- cohérence ;
- maintenabilité ;
- performances raisonnables ;
- code compréhensible par un développeur débutant/intermédiaire.

Évite le sur-engineering.

Ne crée pas d'abstractions complexes sans nécessité réelle.

N'ajoute pas une bibliothèque simplement parce qu'elle pourrait être utile.

Une solution native et simple est préférable lorsqu'elle suffit.

---

## 11. DEBUGGING

Lorsqu'une erreur apparaît :

**ne devine pas.**

Procédure :

1. Identifier le fichier concerné.
2. Lire le code autour de l'erreur.
3. Rechercher les références liées.
4. Identifier la cause réelle.
5. Corriger la cause.
6. Vérifier que la correction ne casse pas le reste.

Évite les contournements temporaires lorsque la cause peut être corrigée proprement.

---

## 12. VÉRIFICATION

Après une modification importante :

- vérifie la cohérence du code ;
- vérifie les références ;
- vérifie les erreurs évidentes ;
- vérifie le responsive si l'interface est concernée ;
- vérifie que les fichiers modifiés sont bien cohérents entre eux.

Ne prétends jamais qu'un résultat a été testé si tu ne l'as pas réellement vérifié.

---

## 13. GESTION DES FICHIERS

Ne crée pas de fichiers temporaires inutiles.

Ne laisse pas de :

- fichiers de test inutilisés ;
- copies `index-old.html` ;
- doublons ;
- fichiers `.bak` ;
- composants abandonnés ;
- code mort

sauf si je le demande.

Respecte la structure existante du projet.

---

## 14. GIT

Avant une opération Git importante, vérifie l'état actuel du dépôt.

Ne fais jamais automatiquement :

- `git reset --hard`
- suppression massive de fichiers ;
- écrasement de modifications utilisateur ;
- réécriture d'historique

sans confirmation explicite.

Ne supprime jamais mes modifications existantes simplement pour résoudre un problème.

---

## 15. COMMUNICATION

Je préfère une communication directe et concise.

Quand le travail est terminé, utilise ce format :

**Fait**
- `fichier` : modification principale
- `fichier` : modification principale

**À vérifier**
- uniquement si une vérification manuelle est réellement nécessaire.

**Point à noter**
- uniquement si quelque chose d'important mérite mon attention.

Si rien ne nécessite mon attention, arrête-toi après le résumé.

Pas de long résumé du code.

Pas de répétition de ma demande.

---

## 16. PRIORITÉ DES INFORMATIONS

En cas de conflit, utilise cet ordre de priorité :

1. État réel des fichiers du projet
2. Architecture et conventions existantes
3. Instructions explicites de ma demande actuelle
4. Instructions générales de ce fichier
5. Bonnes pratiques générales

Ne remplace pas automatiquement une solution existante simplement parce qu'une autre approche est considérée comme plus moderne.

---

# MODE DE RÉFLEXION

Avant chaque action, pose-toi silencieusement ces questions :

1. Quel fichier dois-je réellement modifier ?
2. Puis-je trouver l'information directement dans le projet ?
3. Existe-t-il déjà une solution réutilisable ?
4. Quelle est la modification minimale permettant d'obtenir le résultat demandé ?
5. Est-ce que cette modification risque de casser quelque chose ?
6. Ai-je réellement besoin de lire davantage de fichiers ?

Si la réponse est claire :

**AGIS.**

Ne transforme pas une tâche simple en conversation inutile.

---

# RÈGLE FINALE

**CHERCHE → LIS LE STRICT NÉCESSAIRE → COMPRENDS → MODIFIE LE MINIMUM → VÉRIFIE → RÉPONDS BRIÈVEMENT.**

Ton objectif n'est pas de produire beaucoup de texte.

Ton objectif est de produire **le bon résultat dans les fichiers du projet avec le minimum de contexte et d'actions inutiles.**