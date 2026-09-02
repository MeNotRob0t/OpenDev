# Sécurité

## IMPORTANT

Nous n'acceptons pas les rapports de sécurité générés par IA. Nous en recevons un grand nombre et nous n'avons absolument pas les ressources pour les examiner tous. Si vous en soumettez un, ce sera un bannissement automatique du projet.

## Modèle de Menace

### Vue d'ensemble

OpenCode est un assistant de codage alimenté par IA qui s'exécute localement sur votre machine. Il fournit un système d'agent avec accès à des outils puissants, y compris l'exécution de shell, les opérations sur fichiers et l'accès web.

### Pas de Bac à Sable (Sandbox)

OpenCode **ne** sandboxe **pas** l'agent. Le système de permissions existe comme une fonctionnalité UX pour aider les utilisateurs à rester conscients des actions que l'agent entreprend - il demande confirmation avant d'exécuter des commandes, d'écrire des fichiers, etc. Cependant, il n'est pas conçu pour fournir une isolation de sécurité.

Si vous avez besoin d'une véritable isolation, exécutez OpenCode dans un conteneur Docker ou une VM.

### Mode Serveur

Le mode serveur est opt-in uniquement. Lorsqu'il est activé, définissez `OPENCODE_SERVER_PASSWORD` pour exiger l'authentification HTTP Basic. Sans cela, le serveur s'exécute sans authentification (avec un avertissement). Il est de la responsabilité de l'utilisateur final de sécuriser le serveur - toute fonctionnalité qu'il fournit n'est pas une vulnérabilité.

### Hors Portée

| Catégorie | Justification |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Accès au serveur quand opt-in** | Si vous activez le mode serveur, l'accès API est un comportement attendu |
| **Évasions de sandbox** | Le système de permissions n'est pas une sandbox (voir ci-dessus) |
| **Gestion des données du fournisseur LLM** | Les données envoyées à votre fournisseur LLM configuré sont régies par leurs politiques |
| **Comportement du serveur MCP** | Les serveurs MCP externes que vous configurez sont en dehors de notre frontière de confiance |
| **Fichiers de configuration malveillants** | Les utilisateurs contrôlent leur propre configuration ; la modifier n'est pas un vecteur d'attaque |

---

# Signalement de Problèmes de Sécurité

Nous apprécions vos efforts pour divulguer vos découvertes de manière responsable, et ferons tout notre possible pour reconnaître vos contributions.

Pour signaler un problème de sécurité, veuillez utiliser l'onglet GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

L'équipe enverra une réponse indiquant les prochaines étapes dans le traitement de votre rapport. Après la réponse initiale à votre rapport, l'équipe de sécurité vous tiendra informé de l'avancement vers un correctif et une annonce complète, et pourra demander des informations ou des conseils supplémentaires.

## Escalade

Si vous ne recevez pas d'accusé de réception de votre rapport dans les 6 jours ouvrables, vous pouvez envoyer un e-mail à security@anoma.ly