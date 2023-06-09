---
author: Leo DUMON
pubDatetime: 2023-06-21T00:00:00+00:00
title: Atomic Design in CI/CD
postSlug: atomic-design-in-ci-cd
featured: true
draft: true
tags:
  - ci/cd
  - atomic design
  - gitlab
ogImage: ""
description: Découvrez comment l'Atomic Design peut vous aider à améliorer la maintenabilité de vos pipelines CI/CD.
---

Le talk se découpera en trois parties distinctes pour faire comprendre l'intêret de de l'Atomic Design.

1. Première partie : Mise en place d'une pipeline CI/CD sur Gitlab simpliste

Durant le premier _tier_, on repartira des bases de la CI/CD sur Gitlab avec la création d'une pipeline assez simple : Build -> Test -> Deploy
en explicant à chaque étape ce que fais chaque job rapidement.

On finira cette partie, en corsant un peu les choses, en dupliquant ce code là sur plusieurs micro-services qui partage le même fonctionnement.
Cette première conclusion mettra en lumière l'une des limites du duplicata de code et la difficulté en terme de maintenabilité d'un système large scale.

2. Deuxième partie : Présentation et explication de ce qu'est l'Atomic Design

L'idée ici est d'expliqué d'ou vient ce 'pattern' à la base (De la UI, Brad Frost), de le présenter brièvement (Atoms, Molecules, Organisms, Templates, Pages) et de montrer comment il peut être utilisé dans le cadre de la CI/CD.

3. Troisième partie : Mise en place d'une pipeline CI/CD sur Gitlab avec l'Atomic Design

Là on revient Le talk se découpera en trois parties distinctes pour faire comprendre l'intêret de de l'Atomic Design.

              1. Première partie : Mise en place d'une pipeline CI/CD sur Gitlab simpliste

              Durant le premier *tier*, on repartira des bases de la CI/CD sur Gitlab avec la création d'une pipeline assez simple : Build -> Test -> Deploy
              en explicant à chaque étape ce que fais chaque job rapidement.

              On finira cette partie, en corsant un peu les choses, en dupliquant ce code là sur plusieurs micro-services qui partage le même fonctionnement.
              Cette première conclusion mettra en lumière l'une des limites du duplicata de code et la difficulté en terme de maintenabilité d'un système large scale.

              2. Deuxième partie : Présentation et explication de ce qu'est l'Atomic Design

              L'idée ici est d'expliqué d'ou vient ce 'pattern' à la base (De la UI, Brad Frost), de le présenter brièvement (Atoms, Molecules, Organisms, Templates, Pages) et de montrer comment il peut être utilisé dans le cadre de la CI/CD.

              3. Troisième partie : Mise en place d'une pipeline CI/CD sur Gitlab avec l'Atomic Design

              Là on revient sur les problématiques de la première partie et on montre comment l'Atomic Design peut nous aider à les résoudre.

              4. Conclusion + Q&A

sur les problématiques de la première partie et on montre comment l'Atomic Design peut nous aider à les résoudre.

4. Conclusion + Q&A
