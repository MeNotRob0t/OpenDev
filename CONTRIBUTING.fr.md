# Contribuer

Merci de contribuer ! Ce projet est une variante de [OpenCode](https://github.com/anomalyco/opencode).

Les contributions sont examinées en fonction de leur taille et de leur impact.

## Types de Changements

| Type de Changement | Vote Requis ? | Qui Vote ? | Seuil d'Approbation |
| :--- | :--- | :--- | :--- |
| **Petits Changements** | Non | — | — |
| **Nouvelles Fonctionnalités** | Oui | Tout le monde | >= 2/3 |
| **Changements Majeurs** | Oui | Électeurs de Projet Éligibles | >= 3/4 |

---

## Tous les votes se font via Google Forms

---

## 1. Petits Changements
> **Aucun vote requis.** Fusionnés par les mainteneurs quand prêts.

* **Exemples :** Corrections de bugs/erreurs/sécurité, optimisations mineures, corrections de docs/coquilles et petits refactorings non-cassants.

---

## 2. Nouvelles Fonctionnalités
> **Vote public requis.** Ouvert à tous. Adopté avec approbation **>= 2/3** (calculé comme `Approuver / (Approuver + Rejeter)`).

* **Flux de travail :**
  1. Ouvrez une Issue/Discussion GitHub détaillant la proposition.
  2. Les mainteneurs classent le changement et ouvrent un vote public Google Forms.
  3. Si adopté, implémentez la fonctionnalité et ouvrez une pull request référençant le vote.

---

## 3. Changements Majeurs
> **Vote des électeurs de projet requis.** Restreint aux électeurs de projet éligibles. Adopté avec approbation **>= 3/4**.

* **Exemples :** Refontes architecturales, remplacement de composants majeurs et breaking changes.
* **Flux de travail :** Identique aux nouvelles fonctionnalités, mais restreint aux électeurs de projet et nécessite un seuil **>= 3/4**.

---

## 4. Vote et Intégrité
* **Plateforme :** Effectué via un Google Form désigné lié dans le README/Discussions.
* **Options :** Approuver, Rejeter ou S'abstenir. Les égalités échouent.
* **Intégrité :** Les mainteneurs utilisent les contrôles Google Forms pour prévenir les doublons et peuvent invalider les votes frauduleux, automatisés ou spam.

---

## 5. Pull Requests et Directives de Code
* **Bonnes Pratiques PR :** Expliquer les changements clairement, garder les PR ciblés, inclure des tests et référencer tout résultat de vote. Ne pas combiner de changements sans rapport.
* **Qualité du Code :** Suivre les conventions du projet, éviter les dépendances/duplications inutiles et mettre à jour la documentation pour les changements visibles par l'utilisateur.

---

## 6. Licence et Code Upstream
* Dérivé de [OpenCode](https://github.com/anomalyco/opencode).
* Les contributeurs doivent préserver les copyrights/licences tiers et s'assurer qu'ils ont le droit légal de distribuer le code soumis.

---

## 7. Autorité des Mainteneurs et Urgences
* **Autorité :** Les mainteneurs examinent les PR, classent les changements, résolvent les litiges et gèrent les votes.
* **Changements d'Urgence :** Les mainteneurs peuvent contourner le vote *uniquement* pour les corrections de sécurité critiques, bugs graves ou perte de données, et doivent documenter le contournement après.

---

## 8. Directives Communautaires et Changements de Politique
* **Directives :** Être respectueux, constructif et garder les discussions pertinentes.
* **Mises à jour de Politique :** Les changements à ce fichier nécessitent l'approbation d'au moins **trois quarts (3/4)** des électeurs de projet éligibles.