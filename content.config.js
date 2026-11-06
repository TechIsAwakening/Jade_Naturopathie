// Contenu des pages détaillées du site. Modifiez les textes puis lancez `npm run build`.
//
// Syntaxe dans les textes : [texte du lien](/adresse/) pour un lien interne, **gras** pour le gras.
// Chaque page = une adresse propre (slug) : /<slug>/ ; les articles sont sous /blog/<slug>/.
// Titre (title) : 60 caractères max. Description : 70 à 160 caractères. Le build vous avertit sinon.
// Le prix et la durée des prestations viennent de texts.services.items (site.config.js).

const TARIF_NOTE = "Le tarif est précisé dans l'encadré ci-dessus.";

module.exports = {
  // ───────────────────────── Pages « prestation » ─────────────────────────
  servicePages: [
    {
      slug: "bilan-naturopathique-animal-toulouse",
      icon: "leaf",
      navLabel: "Bilan naturopathique",
      title: "Bilan naturopathique animal à Toulouse | Jade Burgunder",
      description: "Bilan naturopathique complet pour chien ou chat à Toulouse : alimentation, hygiène de vie, comportement et terrain. 50 €, 1h à 1h30.",
      h1: "Bilan naturopathique animal à Toulouse",
      lead: "Le bilan naturopathique est le point de départ de l'accompagnement : une vision complète de la santé de votre animal, de son mode de vie à son terrain, pour construire des conseils sur mesure.",
      sections: [
        {
          h2: "En quoi consiste le bilan naturopathique animal ?",
          text: [
            "Lors du bilan, je prends le temps de comprendre votre animal dans sa globalité : alimentation, hygiène de vie, comportement, environnement, antécédents de santé, mais aussi son « terrain », c'est-à-dire sa sensibilité propre (digestive, cutanée, émotionnelle…).",
            "À partir de ces éléments, je vous propose des conseils personnalisés, simples à mettre en place au quotidien : ajustements alimentaires, hygiène de vie, soutien par des méthodes naturelles adaptées à l'espèce."
          ]
        },
        {
          h2: "Dans quelles situations consulter ?",
          list: [
            "Troubles digestifs récurrents : selles molles, ballonnements, vomissements",
            "Allergies, démangeaisons, problèmes de peau et de poil",
            "Stress, anxiété ou comportement difficile à gérer",
            "Prise de poids ou baisse de forme",
            "Envie de passer à une alimentation plus naturelle",
            "Prévention et bien-être d'un animal en bonne santé, ou accompagnement d'un animal âgé"
          ]
        },
        {
          h2: "Comment se déroule le rendez-vous ?",
          text: [
            "Le bilan dure entre 1h et 1h30. Nous faisons le point sur le quotidien de votre animal, ses habitudes et ses éventuels troubles. À l'issue de la séance, vous repartez avec des conseils clairs et un plan d'action adapté à votre animal et à votre mode de vie."
          ]
        },
        {
          h2: "Ce que disent mes clients",
          quote: { text: "Après un bilan complet, Jade nous a donné de nombreux conseils et permis de mettre en place une routine et une cure adaptée à notre chienne.", author: "Marion Giboulot", source: "avis Google, juillet 2025" }
        }
      ],
      faq: [
        { q: "Combien coûte un bilan naturopathique pour un animal ?", a: "Le bilan naturopathique est à 50 €, pour une durée d'1h à 1h30." },
        { q: "Faut-il consulter un vétérinaire avant le bilan ?", a: "Pour toute problématique de santé, un avis vétérinaire est recommandé : le bilan naturopathique intervient en complément, jamais en remplacement. Vous pouvez me communiquer les informations de votre vétérinaire si vous le souhaitez." },
        { q: "Au bout de combien de temps voit-on des changements ?", a: "Chaque animal est différent. Certains changements (digestion, calme) peuvent apparaître en quelques semaines, d'autres demandent plus de temps. Le suivi naturopathique permet d'ajuster les conseils au fil de l'évolution." }
      ],
      related: ["suivi-naturopathique-animal-toulouse", "alimentation-naturelle-chien-chat-toulouse", "fleurs-de-bach-animaux-toulouse", "naturopathe-chien-toulouse", "naturopathe-chat-toulouse"]
    },

    {
      slug: "suivi-naturopathique-animal-toulouse",
      icon: "plant",
      navLabel: "Suivi naturopathique",
      title: "Suivi naturopathique animal à Toulouse | Jade Burgunder",
      description: "Suivi naturopathique pour chien ou chat à Toulouse : ajuster les conseils et accompagner l'évolution de votre animal dans le temps. 30 €.",
      h1: "Suivi naturopathique animal à Toulouse",
      lead: "Après le bilan, le suivi naturopathique permet d'ajuster les conseils et d'accompagner l'évolution de votre compagnon dans le temps.",
      sections: [
        {
          h2: "À quoi sert le suivi naturopathique ?",
          text: [
            "Un animal évolue : son âge, les saisons, son environnement et son état de santé changent. Le suivi permet de faire le point sur les effets des conseils mis en place, de les ajuster et de répondre à vos questions.",
            "C'est un véritable accompagnement dans la durée, qui évite de laisser les conseils du bilan « dormir dans un tiroir »."
          ]
        },
        {
          h2: "Quand programmer un suivi ?",
          list: [
            "Après un bilan naturopathique, pour évaluer les premiers changements",
            "Lors d'une transition alimentaire ou d'un changement de mode de vie",
            "Quand de nouveaux symptômes ou un nouveau contexte apparaissent (déménagement, arrivée d'un autre animal…)",
            "Pour accompagner un animal âgé ou en convalescence, en lien avec votre vétérinaire"
          ]
        },
        {
          h2: "Un accompagnement qui s'adapte",
          text: [
            "Plusieurs clients soulignent que les conseils sont réajustés en cours de route lorsque c'est nécessaire. Le suivi est le moment de partager vos observations : ce qui fonctionne, ce qui est difficile à appliquer, ce qui a changé chez votre animal."
          ]
        }
      ],
      faq: [
        { q: "Combien coûte un suivi naturopathique ?", a: "Le suivi naturopathique est à 30 €." },
        { q: "Faut-il avoir fait un bilan avant ?", a: "Le suivi s'appuie sur les éléments du bilan : il est généralement proposé après un premier bilan naturopathique." },
        { q: "À quelle fréquence faire un suivi ?", a: "Cela dépend de votre animal et de sa situation. Nous définissons ensemble le bon rythme à l'issue du bilan." }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "alimentation-naturelle-chien-chat-toulouse", "kinesiologie-animale-toulouse", "naturopathe-chien-toulouse", "naturopathe-chat-toulouse"]
    },

    {
      slug: "kinesiologie-animale-toulouse",
      icon: "heart",
      navLabel: "Kinésiologie animale",
      title: "Kinésiologie animale à Toulouse | Jade Burgunder",
      description: "Séance de kinésiologie animale à Toulouse : libérer les tensions physiques et émotionnelles de votre chien ou chat en douceur. 50 €, 1h30.",
      h1: "Kinésiologie animale à Toulouse",
      lead: "La kinésiologie animale est une approche douce qui vise à libérer les tensions physiques et émotionnelles de votre compagnon.",
      sections: [
        {
          h2: "Qu'est-ce que la kinésiologie animale ?",
          text: [
            "La kinésiologie est une méthode d'accompagnement non invasive, qui s'appuie sur l'écoute des réponses du corps pour repérer ce qui peut perturber l'équilibre de l'animal : stress, émotions, tensions, déséquilibres… Elle ne pose pas de diagnostic médical.",
            "La séance se déroule dans le respect du rythme et des besoins de l'animal, avec douceur."
          ]
        },
        {
          h2: "Pour quelles situations ?",
          list: [
            "Stress, anxiété, peurs",
            "Changements de vie : déménagement, deuil, arrivée d'un bébé ou d'un autre animal",
            "Comportements réactifs ou difficiles à comprendre",
            "Tensions et inconfort, en complément du suivi vétérinaire",
            "Animaux âgés, pour un accompagnement tout en douceur"
          ]
        },
        {
          h2: "Un accompagnement pour l'animal… et pour vous",
          text: [
            "Animal et propriétaire forment un binôme : votre ressenti et votre contexte font partie de la séance. Plusieurs avis [laissés sur Google](/#avis) évoquent ce soulagement partagé entre l'animal et son humain."
          ],
          quote: { text: "J'ai ressenti beaucoup de libération pour nous deux. Je recommande Jade pour sa gentillesse et sa connaissance.", author: "Ludivine PRIEGO", source: "avis Google, décembre 2024" }
        }
      ],
      faq: [
        { q: "Comment se passe une séance de kinésiologie pour un animal ?", a: "La séance dure environ 1h30, en douceur et au rythme de l'animal. Vous y participez : votre ressenti et le contexte de vie de votre compagnon font partie de l'accompagnement." },
        { q: "Combien coûte une séance de kinésiologie animale ?", a: "La séance de kinésiologie est à 50 € pour environ 1h30." },
        { q: "Combien de séances faut-il ?", a: "Cela dépend de la situation de votre animal. Nous en discutons ensemble à l'issue de la première séance." },
        { q: "La kinésiologie remplace-t-elle un traitement vétérinaire ?", a: "Non. Elle intervient en complément du suivi vétérinaire, jamais en remplacement." }
      ],
      related: ["reflexologie-cranio-sacree-animale-toulouse", "fleurs-de-bach-animaux-toulouse", "naturopathe-chat-toulouse", "naturopathe-chien-toulouse"]
    },

    {
      slug: "reflexologie-cranio-sacree-animale-toulouse",
      icon: "hand",
      navLabel: "Réflexologie cranio-sacrée",
      title: "Réflexologie cranio-sacrée animale Toulouse | Jade Burgunder",
      description: "Réflexologie cranio-sacrée pour chien ou chat à Toulouse : un toucher subtil pour apaiser l'organisme et rétablir l'équilibre. 40 €.",
      h1: "Réflexologie cranio-sacrée animale à Toulouse",
      lead: "Un toucher subtil pour rétablir l'équilibre et apaiser l'organisme de votre animal.",
      sections: [
        {
          h2: "En quoi consiste la réflexologie cranio-sacrée animale ?",
          text: [
            "La réflexologie cranio-sacrée est une approche manuelle très douce, qui s'appuie sur des contacts légers, notamment au niveau du crâne et de la colonne vertébrale, pour favoriser la détente et l'équilibre de l'organisme.",
            "Elle respecte entièrement le rythme et les limites de l'animal : la séance s'adapte à lui, jamais l'inverse."
          ]
        },
        {
          h2: "Quand l'envisager ?",
          list: [
            "Animal stressé, anxieux ou hypersensible",
            "Période de changements ou de convalescence",
            "Animal âgé ou fatigué, pour un moment d'apaisement",
            "En complément d'un bilan naturopathique"
          ]
        },
        {
          h2: "Une approche complémentaire",
          text: [
            "La réflexologie cranio-sacrée se combine volontiers avec la [kinésiologie animale](/kinesiologie-animale-toulouse/) et le [bilan naturopathique](/bilan-naturopathique-animal-toulouse/) pour un accompagnement global."
          ]
        }
      ],
      faq: [
        { q: "Combien coûte une séance de réflexologie cranio-sacrée animale ?", a: "La séance de réflexologie cranio-sacrée est à 40 €." },
        { q: "La séance est-elle désagréable pour l'animal ?", a: "Non. Le toucher est très léger et la séance s'adapte à l'animal : elle peut être interrompue ou ajustée s'il le demande." },
        { q: "Remplace-t-elle une consultation vétérinaire ?", a: "Non, elle ne pose aucun diagnostic et ne remplace jamais le suivi de votre vétérinaire." }
      ],
      related: ["kinesiologie-animale-toulouse", "bilan-naturopathique-animal-toulouse", "naturopathe-chat-toulouse", "fleurs-de-bach-animaux-toulouse"]
    },

    {
      slug: "alimentation-naturelle-chien-chat-toulouse",
      icon: "plant",
      navLabel: "Alimentation naturelle",
      noPrice: true,
      title: "Alimentation naturelle chien et chat à Toulouse",
      description: "Conseils en alimentation naturelle pour chien et chat à Toulouse : transition alimentaire, digestion, poids, peau. Un suivi personnalisé et réaliste.",
      h1: "Alimentation naturelle du chien et du chat à Toulouse",
      lead: "L'alimentation est l'un des piliers de la santé de votre animal. Je vous aide à choisir et à adapter une alimentation la plus naturelle possible, selon son espèce, son âge et son terrain.",
      sections: [
        {
          h2: "Pourquoi s'intéresser à l'alimentation de son animal ?",
          text: [
            "L'alimentation influence la digestion, la peau et le poil, le poids, l'énergie et même l'humeur. Beaucoup de troubles du quotidien (selles irrégulières, démangeaisons, prise de poids) amènent naturellement à se poser la question de ce que l'on met dans la gamelle."
          ]
        },
        {
          h2: "Mon accompagnement en alimentation naturelle",
          list: [
            "Analyse de l'alimentation actuelle (alimentation industrielle ou ménagère)",
            "Conseils personnalisés selon l'âge, l'activité, la santé et le terrain de l'animal",
            "Transition alimentaire progressive et suivie",
            "Ajustements au fil du temps, selon les réactions de votre animal"
          ]
        },
        {
          h2: "Des conseils simples, détaillés et suivis",
          text: [
            "Les avis le soulignent : les conseils sont simples à appliquer, détaillés, et réajustés en cours de route si la transition est difficile. L'objectif n'est pas d'imposer un modèle unique, mais de trouver ce qui est adapté et réaliste pour votre animal et pour vous.",
            "Les conseils d'alimentation sont abordés dans le cadre du [bilan naturopathique](/bilan-naturopathique-animal-toulouse/) puis du [suivi naturopathique](/suivi-naturopathique-animal-toulouse/)."
          ],
          quote: { text: "Ses conseils sont simples et bien détaillés.", author: "Isabelle Salobert", source: "avis Google, avril 2025" }
        }
      ],
      faq: [
        { q: "Faut-il arrêter les croquettes ?", a: "Pas nécessairement. L'objectif est d'adapter l'alimentation à votre animal, pas d'imposer un modèle unique. Nous regardons ensemble ce qui est le plus adapté et réaliste pour vous." },
        { q: "Peut-on changer l'alimentation d'un animal malade ?", a: "En cas de maladie diagnostiquée, tout changement alimentaire doit se faire en accord avec votre vétérinaire." },
        { q: "Combien de temps dure une transition alimentaire ?", a: "En général, on change d'alimentation progressivement sur une à deux semaines, parfois plus pour les animaux sensibles. Le suivi permet d'ajuster en fonction des réactions." }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "suivi-naturopathique-animal-toulouse", "naturopathe-chien-toulouse", "naturopathe-chat-toulouse"]
    },

    {
      slug: "fleurs-de-bach-animaux-toulouse",
      icon: "flower",
      navLabel: "Fleurs de Bach",
      noPrice: true,
      title: "Fleurs de Bach pour animaux à Toulouse | Jade Burgunder",
      description: "Fleurs de Bach et élixirs floraux pour chien ou chat à Toulouse : stress, peurs, nervosité. Des compositions personnalisées pour votre animal.",
      h1: "Fleurs de Bach et élixirs floraux pour animaux à Toulouse",
      lead: "Les fleurs de Bach et élixirs floraux sont des préparations douces, utilisées pour accompagner les émotions de votre animal… et de son humain.",
      sections: [
        {
          h2: "Qu'est-ce que les fleurs de Bach pour animaux ?",
          text: [
            "Les fleurs de Bach sont des élixirs floraux mis au point dans les années 1930 par le docteur Edward Bach. Ils sont utilisés pour accompagner l'équilibre émotionnel : peur, stress, nervosité, tristesse… Ce ne sont pas des médicaments."
          ]
        },
        {
          h2: "Pour quelles situations ?",
          list: [
            "Peurs : orages, feux d'artifice, bruits forts",
            "Stress de séparation, anxiété",
            "Réactivité ou nervosité",
            "Changements : déménagement, arrivée d'un nouvel animal, deuil",
            "Accompagnement du propriétaire, car animal et humain s'influencent mutuellement"
          ]
        },
        {
          h2: "Des compositions personnalisées",
          text: [
            "Chaque animal reçoit une composition adaptée à sa personnalité et à sa situation, avec un mode d'emploi simple à suivre au quotidien. Ces accompagnements sont abordés dans le cadre du [bilan](/bilan-naturopathique-animal-toulouse/) et du [suivi naturopathique](/suivi-naturopathique-animal-toulouse/)."
          ],
          quote: { text: "Elle nous a conseillé des composés totalement personnalisés, et en seulement 15 jours, les changements sont flagrants !", author: "franskafred m", source: "avis Google, août 2025" }
        }
      ],
      faq: [
        { q: "Les fleurs de Bach sont-elles sans danger pour mon animal ?", a: "Les élixirs floraux sont généralement bien tolérés. Certains contiennent de l'alcool comme conservateur : je vous indique le mode d'administration adapté à votre animal. En cas de doute, demandez conseil à votre vétérinaire." },
        { q: "Peut-on donner des fleurs de Bach à un chat ?", a: "Oui, des compositions adaptées existent pour les chats, avec un mode d'administration qui respecte leur sensibilité (dans l'eau ou la nourriture)." },
        { q: "Les fleurs de Bach remplacent-elles un traitement ?", a: "Non. Elles accompagnent l'aspect émotionnel et ne remplacent jamais un traitement ou un avis vétérinaire." }
      ],
      related: ["kinesiologie-animale-toulouse", "bilan-naturopathique-animal-toulouse", "naturopathe-chat-toulouse", "naturopathe-chien-toulouse"]
    }
  ],

  // ───────────────────────── Pages « type d'animal » ─────────────────────────
  animalPages: [
    {
      slug: "naturopathe-chien-toulouse",
      icon: "dog",
      navLabel: "Naturopathe pour chien",
      title: "Naturopathe pour chien à Toulouse | Jade Burgunder",
      description: "Naturopathe animalière à Toulouse, j'accompagne votre chien : alimentation, digestion, allergies cutanées, stress. Bilan 50 €, en complément du vétérinaire.",
      h1: "Naturopathe pour chien à Toulouse",
      lead: "Alimentation, peau, digestion, stress… Je vous accompagne à Toulouse et en Haute-Garonne pour le bien-être naturel de votre chien.",
      serviceType: "Naturopathie pour chiens",
      sections: [
        {
          h2: "Les motifs de consultation les plus fréquents chez le chien",
          list: [
            "**Alimentation** : transition vers une alimentation plus naturelle, chien difficile, prise de poids",
            "**Digestion** : selles molles, ballonnements, vomissements",
            "**Peau et poil** : démangeaisons, allergies cutanées, léchage",
            "**Stress et comportement** : anxiété de séparation, peurs, réactivité",
            "**Troubles récurrents** (urinaires, par exemple), en lien avec votre vétérinaire",
            "**Chien âgé** : accompagner son confort et sa vitalité"
          ]
        },
        {
          h2: "Mon approche pour votre chien",
          text: [
            "Chaque chien est unique. Je m'intéresse à son alimentation, à son rythme de vie, à ses émotions et à son environnement, puis je vous propose des conseils concrets, adaptés à son terrain et à votre quotidien.",
            "Selon la situation, l'accompagnement peut associer [alimentation naturelle](/alimentation-naturelle-chien-chat-toulouse/), [fleurs de Bach](/fleurs-de-bach-animaux-toulouse/) et [kinésiologie](/kinesiologie-animale-toulouse/). Le tout démarre par un [bilan naturopathique](/bilan-naturopathique-animal-toulouse/)."
          ]
        },
        {
          h2: "Ce que disent les propriétaires de chiens",
          quote: { text: "Jade BURGUNDER est une personne douce et compétente. Vraiment je recommande !", author: "Isabelle Salobert", source: "avis Google, avril 2025" }
        }
      ],
      faq: [
        { q: "Mon chien a des allergies : la naturopathie peut-elle l'aider ?", a: "La naturopathie peut accompagner les terrains allergiques, notamment par l'alimentation et l'hygiène de vie, en complément du suivi vétérinaire. Le bilan permet d'identifier les pistes les plus pertinentes pour votre chien." },
        { q: "Combien coûte une consultation pour mon chien ?", a: "Le bilan naturopathique est à 50 € (1h à 1h30), le suivi à 30 €." },
        { q: "Mon chien est très stressé : que proposez-vous ?", a: "Selon son profil, je peux proposer des conseils d'environnement, des élixirs floraux et des séances de kinésiologie ou de réflexologie cranio-sacrée, en douceur." }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "alimentation-naturelle-chien-chat-toulouse", "fleurs-de-bach-animaux-toulouse", "kinesiologie-animale-toulouse"]
    },

    {
      slug: "naturopathe-chat-toulouse",
      icon: "cat",
      navLabel: "Naturopathe pour chat",
      title: "Naturopathe pour chat à Toulouse | Jade Burgunder",
      description: "Naturopathe animalière à Toulouse, j'accompagne votre chat : stress, allergies, surpoids, digestion. Une approche douce, en complément du vétérinaire.",
      h1: "Naturopathe pour chat à Toulouse",
      lead: "Les chats cachent souvent leur inconfort. Je vous accompagne à Toulouse avec une approche douce, adaptée à leur sensibilité.",
      serviceType: "Naturopathie pour chats",
      sections: [
        {
          h2: "Les motifs de consultation les plus fréquents chez le chat",
          list: [
            "**Alimentation et poids** : surpoids, appétit capricieux, transition alimentaire",
            "**Peau et allergies** : démangeaisons, léchage excessif, poil terne",
            "**Digestion et troubles urinaires** : en complément du suivi vétérinaire",
            "**Stress** : marquage, nervosité, changements de vie, cohabitation difficile",
            "**Terrain sensible** (respiratoire, allergique…) : conseils d'hygiène de vie et d'environnement",
            "**Chat âgé** : accompagner son confort au quotidien"
          ]
        },
        {
          h2: "Une approche respectueuse du chat",
          text: [
            "Un chat n'aime pas être bousculé. La séance s'adapte à son rythme, et l'on tient compte de son environnement : lieux de repos, bacs, gamelles, jeux, relations avec les autres animaux de la maison.",
            "Selon la situation, je peux associer [alimentation naturelle](/alimentation-naturelle-chien-chat-toulouse/), [fleurs de Bach](/fleurs-de-bach-animaux-toulouse/), [kinésiologie](/kinesiologie-animale-toulouse/) ou [réflexologie cranio-sacrée](/reflexologie-cranio-sacree-animale-toulouse/)."
          ]
        },
        {
          h2: "Ce que disent les propriétaires de chats",
          quote: { text: "Jade pose beaucoup de questions et se renseigne beaucoup avant de proposer des solutions. Je me suis sentie vraiment accompagnée.", author: "Aurelie A", source: "avis Google, novembre 2022" }
        }
      ],
      faq: [
        { q: "Mon chat est stressé : que faire ?", a: "Commencez par écarter une cause médicale avec votre vétérinaire, car le stress peut cacher un problème de santé. Ensuite, un bilan permet d'ajuster l'environnement et de proposer un accompagnement adapté. Vous pouvez aussi lire notre article : [chat stressé, signes et solutions](/blog/chat-stresse-signes-et-solutions-naturelles/)." },
        { q: "Combien coûte une consultation pour mon chat ?", a: "Le bilan naturopathique est à 50 € (1h à 1h30), le suivi à 30 € et la séance de kinésiologie à 50 €." },
        { q: "Mon chat n'aime pas être manipulé, est-ce un problème ?", a: "Non. L'accompagnement respecte le rythme du chat. Le bilan repose avant tout sur l'échange avec vous." }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "kinesiologie-animale-toulouse", "fleurs-de-bach-animaux-toulouse", "alimentation-naturelle-chien-chat-toulouse"]
    }
  ],

  // ───────────────────────── Blog ─────────────────────────
  // date : AAAA-MM-JJ. Les articles sont triés du plus récent au plus ancien.
  articles: [
    {
      slug: "naturopathie-animale-comment-se-passe-une-consultation",
      date: "2026-10-06",
      minutes: 4,
      title: "Naturopathie animale : comment se passe une consultation ?",
      description: "Naturopathie animale : à quoi sert une consultation, comment elle se déroule et pourquoi elle complète le suivi vétérinaire. Le guide d'une naturopathe.",
      h1: "Naturopathie animale : comment se passe une consultation ?",
      excerpt: "À quoi sert un naturopathe pour animaux, comment se déroule un rendez-vous et que peut-on en attendre ? On fait le point.",
      lead: "Vous entendez parler de naturopathie pour les animaux mais vous ne savez pas à quoi vous attendre ? Voici comment se passe, concrètement, une consultation.",
      sections: [
        {
          h2: "La naturopathie animale, c'est quoi ?",
          text: [
            "Selon l'OMS, la naturopathie est « un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens considérés comme naturels et biologiques ». Appliquée aux animaux, elle considère votre compagnon dans sa globalité : son corps, ses émotions et son environnement.",
            "Le naturopathe animalier n'est pas vétérinaire : il ne pose pas de diagnostic et ne prescrit pas de médicament. Son rôle est d'agir sur l'hygiène de vie pour soutenir la santé de l'animal, **en complément** du suivi vétérinaire."
          ]
        },
        {
          h2: "Les trois piliers de l'accompagnement",
          list: [
            "**L'alimentation** : ce que mange votre animal, comment, en quelle quantité",
            "**Le mode de vie** : activité, repos, environnement, relations avec les autres animaux et avec vous",
            "**Les émotions** : stress, peurs, changements, qui influencent directement la santé"
          ]
        },
        {
          h2: "Le déroulement d'un bilan naturopathique",
          text: [
            "Le rendez-vous dure environ une heure à une heure et demie. Nous passons en revue l'alimentation, le comportement, les antécédents de santé et le quotidien de votre animal. Chaque détail compte : une selle un peu molle, un grattage nocturne, une peur des orages.",
            "À la fin du rendez-vous, vous repartez avec des conseils concrets et adaptés. Le [bilan naturopathique](/bilan-naturopathique-animal-toulouse/) est ensuite complété, si besoin, par un [suivi](/suivi-naturopathique-animal-toulouse/) pour ajuster les conseils."
          ]
        },
        {
          h2: "Quand consulter ?",
          list: [
            "Pour un trouble récurrent (digestion, peau, comportement) en complément du vétérinaire",
            "Pour passer à une alimentation plus naturelle",
            "Pour accompagner un animal stressé ou sensible",
            "Pour la prévention et le bien-être d'un animal en bonne santé ou âgé"
          ]
        },
        {
          h2: "À retenir",
          text: [
            "Une consultation de naturopathie animale n'est pas une consultation médicale : c'est un temps d'écoute et de conseils pour agir sur le quotidien de votre animal. En cas de symptôme inquiétant, consultez toujours votre vétérinaire en priorité."
          ]
        }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "naturopathe-chien-toulouse", "naturopathe-chat-toulouse"]
    },

    {
      slug: "alimentation-naturelle-chien-par-ou-commencer",
      date: "2026-10-13",
      minutes: 5,
      title: "Alimentation naturelle du chien : par où commencer ?",
      description: "Passer à une alimentation plus naturelle pour son chien : les étapes clés, les erreurs à éviter, les aliments toxiques et l'importance du suivi.",
      h1: "Alimentation naturelle du chien : par où commencer ?",
      excerpt: "Transition progressive, aliments à éviter, observation de votre chien : les bases pour changer son alimentation sereinement.",
      lead: "Vous souhaitez offrir à votre chien une alimentation plus naturelle, mais vous ne savez pas par où commencer ? Voici les étapes essentielles.",
      sections: [
        {
          h2: "1. Observer son chien avant de changer quoi que ce soit",
          text: [
            "Avant tout changement, prenez quelques jours pour noter l'état de votre chien : qualité des selles, aspect du poil et de la peau, niveau d'énergie, poids, appétit. Ces observations serviront de repères pour mesurer l'effet des changements."
          ]
        },
        {
          h2: "2. Regarder la composition de l'alimentation actuelle",
          text: [
            "Quelle que soit l'alimentation (croquettes, pâtée, ration ménagère), la composition est la première information utile : la liste des ingrédients, leur ordre et leur origine. Plus la liste est courte et lisible, plus il est simple de comprendre ce que mange votre chien."
          ]
        },
        {
          h2: "3. Changer progressivement",
          text: [
            "Un changement brutal d'alimentation est une cause fréquente de troubles digestifs. On procède généralement de façon progressive sur une à deux semaines, en augmentant peu à peu la part du nouvel aliment et en surveillant les selles. Les chiens sensibles peuvent demander davantage de temps."
          ]
        },
        {
          h2: "4. Connaître les aliments toxiques",
          text: ["Certains aliments « naturels » sont dangereux pour le chien. À ne jamais donner :"],
          list: [
            "chocolat et cacao",
            "raisins frais ou secs",
            "oignon, ail, ciboulette",
            "avocat",
            "noix de macadamia",
            "xylitol (édulcorant présent dans certains produits sans sucre)"
          ]
        },
        {
          h2: "5. Attention à l'équilibre de la ration",
          text: [
            "La ration ménagère demande de respecter des équilibres précis, notamment entre calcium et phosphore. Une ration mal équilibrée peut entraîner des carences à long terme. C'est pourquoi un accompagnement est précieux, surtout pour un chiot, un chien âgé ou un chien malade, pour qui l'avis de votre vétérinaire est indispensable."
          ]
        },
        {
          h2: "Se faire accompagner",
          text: [
            "Un [bilan naturopathique](/bilan-naturopathique-animal-toulouse/) permet de faire le point sur l'alimentation de votre chien et de construire un plan adapté à son terrain. Le [suivi](/suivi-naturopathique-animal-toulouse/) ajuste les conseils si la transition est difficile. Pour en savoir plus : [alimentation naturelle du chien et du chat](/alimentation-naturelle-chien-chat-toulouse/)."
          ]
        }
      ],
      related: ["alimentation-naturelle-chien-chat-toulouse", "bilan-naturopathique-animal-toulouse", "naturopathe-chien-toulouse"]
    },

    {
      slug: "chat-stresse-signes-et-solutions-naturelles",
      date: "2026-10-20",
      minutes: 5,
      title: "Chat stressé : reconnaître les signes et l'apaiser",
      description: "Marquage, léchage excessif, cachettes : reconnaître un chat stressé, comprendre les causes et découvrir des pistes naturelles pour l'apaiser.",
      h1: "Chat stressé : reconnaître les signes et l'aider naturellement",
      excerpt: "Marquage, toilettage excessif, agressivité : 7 signes de stress chez le chat et des pistes concrètes pour l'apaiser.",
      lead: "Le chat est un animal discret : son stress passe souvent inaperçu, jusqu'à ce que des comportements inhabituels apparaissent. Voici comment le repérer et l'aider.",
      sections: [
        {
          h2: "Les signes d'un chat stressé",
          list: [
            "Marquage urinaire ou malpropreté",
            "Toilettage excessif, parfois jusqu'à la perte de poils",
            "Se cacher davantage ou éviter le contact",
            "Agressivité ou irritabilité inhabituelle",
            "Perte d'appétit ou, au contraire, grignotage compulsif",
            "Griffades marquées sur les meubles",
            "Vocalises inhabituelles, surtout la nuit"
          ]
        },
        {
          h2: "Première étape : consulter son vétérinaire",
          text: [
            "Ces signes peuvent aussi révéler un problème de santé (cystite, douleur, maladie…). Avant de parler de stress, il est essentiel de faire examiner votre chat par un vétérinaire."
          ]
        },
        {
          h2: "Les causes fréquentes de stress",
          list: [
            "Un déménagement, des travaux ou un changement de routine",
            "L'arrivée d'un nouvel animal ou d'un bébé",
            "Des tensions entre chats de la maison",
            "Un manque de ressources : pas assez de bacs, de gamelles, de cachettes",
            "L'ennui ou le manque de stimulation"
          ]
        },
        {
          h2: "Des pistes naturelles pour l'apaiser",
          list: [
            "**Aménager l'environnement** : perchoirs, cachettes, griffoirs, un bac à litière par chat plus un",
            "**Séparer les ressources** : gamelles, eau et bacs dans des endroits différents",
            "**Garder des routines** : repas, jeux et câlins à heures régulières",
            "**Jouer chaque jour** : de courtes séances qui simulent la chasse",
            "**Les élixirs floraux** : voir [les fleurs de Bach pour animaux](/fleurs-de-bach-animaux-toulouse/)",
            "**La [kinésiologie animale](/kinesiologie-animale-toulouse/)** pour accompagner les émotions en douceur"
          ]
        },
        {
          h2: "Se faire accompagner",
          text: [
            "Chaque chat a son histoire et son tempérament. Une consultation permet d'identifier ce qui pèse sur lui et d'adapter l'environnement et l'accompagnement. Découvrez comment je travaille avec les chats : [naturopathe pour chat à Toulouse](/naturopathe-chat-toulouse/)."
          ]
        }
      ],
      related: ["naturopathe-chat-toulouse", "kinesiologie-animale-toulouse", "fleurs-de-bach-animaux-toulouse"]
    },

    {
      slug: "allergies-cutanees-chien-chat-pistes-naturelles",
      date: "2026-10-27",
      minutes: 5,
      title: "Allergies cutanées chien et chat : les pistes naturelles",
      description: "Démangeaisons, léchage, rougeurs : comprendre les allergies cutanées du chien et du chat et les pistes naturelles pour les accompagner, avec votre vétérinaire.",
      h1: "Allergies cutanées du chien et du chat : les pistes naturelles",
      excerpt: "Démangeaisons, léchage, rougeurs : les causes possibles et les pistes naturelles à explorer, toujours avec votre vétérinaire.",
      lead: "Un animal qui se gratte, se lèche ou perd ses poils n'est pas toujours allergique, mais les allergies cutanées sont très fréquentes. Voici comment s'y retrouver.",
      sections: [
        {
          h2: "Les signes qui doivent alerter",
          list: [
            "Démangeaisons répétées, grattage ou léchage insistant",
            "Rougeurs, croûtes ou perte de poils",
            "Oreilles qui s'infectent régulièrement",
            "Pattes léchées ou mordillées"
          ]
        },
        {
          h2: "Les causes possibles",
          list: [
            "**Parasites** : une simple allergie à la salive de puce peut suffire à déclencher de fortes démangeaisons",
            "**Environnement** : acariens, pollens, moisissures",
            "**Alimentation** : une intolérance ou une allergie alimentaire",
            "**Stress** : il peut aggraver le léchage et les démangeaisons"
          ]
        },
        {
          h2: "Toujours commencer chez le vétérinaire",
          text: [
            "Seul le vétérinaire peut poser un diagnostic, écarter les parasites et les infections, et mettre en place des examens si besoin. L'approche naturopathique vient en complément."
          ]
        },
        {
          h2: "Les pistes naturelles en complément",
          list: [
            "**Revoir l'alimentation**, parfois avec un régime d'éviction encadré par votre vétérinaire",
            "**Soutenir la peau** par une alimentation adaptée, par exemple riche en bons acides gras",
            "**Limiter les allergènes** : laver régulièrement les couchages, rincer les pattes après les promenades",
            "**Prendre soin de l'équilibre digestif**, souvent lié à la santé de la peau",
            "**Apaiser le stress** : [kinésiologie](/kinesiologie-animale-toulouse/) ou [élixirs floraux](/fleurs-de-bach-animaux-toulouse/)"
          ]
        },
        {
          h2: "Un accompagnement sur la durée",
          text: [
            "Les allergies se gèrent rarement en un seul rendez-vous. Le [bilan naturopathique](/bilan-naturopathique-animal-toulouse/) fait le point sur le terrain de votre animal et le [suivi](/suivi-naturopathique-animal-toulouse/) permet d'ajuster les conseils. Retrouvez-moi aussi pour le [chien](/naturopathe-chien-toulouse/) et pour le [chat](/naturopathe-chat-toulouse/)."
          ]
        }
      ],
      related: ["bilan-naturopathique-animal-toulouse", "naturopathe-chien-toulouse", "naturopathe-chat-toulouse"]
    },

    {
      slug: "fleurs-de-bach-animaux-mode-d-emploi",
      date: "2026-11-03",
      minutes: 4,
      title: "Fleurs de Bach pour animaux : mode d'emploi",
      description: "Fleurs de Bach pour chien et chat : à quoi servent-elles, comment les donner, combien de temps et quelles précautions ? Le mode d'emploi pas à pas.",
      h1: "Fleurs de Bach pour animaux : mode d'emploi",
      excerpt: "À quoi servent les fleurs de Bach, comment les donner à un chien ou à un chat et quelles précautions prendre ? Le mode d'emploi.",
      lead: "Souvent évoquées pour les peurs et le stress, les fleurs de Bach intriguent. Voici comment elles s'utilisent chez l'animal et ce qu'il faut savoir.",
      sections: [
        {
          h2: "À quoi servent les fleurs de Bach ?",
          text: [
            "Mises au point dans les années 1930 par le docteur Edward Bach, les fleurs de Bach sont des élixirs floraux utilisés pour accompagner l'équilibre émotionnel : peur, stress, nervosité, tristesse. Elles ne soignent pas une maladie et ne sont pas des médicaments."
          ]
        },
        {
          h2: "Dans quelles situations ?",
          list: [
            "Orages, feux d'artifice, bruits forts",
            "Séparation, voyage, déménagement",
            "Arrivée d'un nouvel animal ou d'un bébé",
            "Nervosité ou réactivité",
            "Deuil et périodes de changement"
          ]
        },
        {
          h2: "Comment les donner ?",
          list: [
            "**Dans l'eau de boisson** ou **la nourriture**, selon les indications données pour la composition",
            "**Sur le museau ou la peau** (zone sans poils, comme l'intérieur de l'oreille) pour les animaux qui refusent",
            "En respectant les quantités prescrites pour chaque composition"
          ]
        },
        {
          h2: "Combien de temps ?",
          text: [
            "Les élixirs agissent en douceur : on les donne généralement pendant plusieurs semaines, puis on fait le point. Certaines situations ponctuelles (un orage, un voyage) se préparent quelques jours à l'avance."
          ]
        },
        {
          h2: "Les précautions à prendre",
          list: [
            "Certaines préparations contiennent de l'alcool : demandez une version adaptée à votre animal",
            "Ne remplacez jamais un traitement vétérinaire par des fleurs de Bach",
            "En cas de comportement inquiétant ou de changement soudain, consultez d'abord votre vétérinaire"
          ]
        },
        {
          h2: "Une composition personnalisée",
          text: [
            "Les fleurs de Bach se choisissent en fonction du caractère de l'animal et de la situation. Je compose des mélanges adaptés dans le cadre d'un accompagnement : découvrez la page [fleurs de Bach pour animaux à Toulouse](/fleurs-de-bach-animaux-toulouse/)."
          ]
        }
      ],
      related: ["fleurs-de-bach-animaux-toulouse", "kinesiologie-animale-toulouse", "naturopathe-chien-toulouse"]
    }
  ],

  // ───────────────────────── Pages légales ─────────────────────────
  // Les valeurs « [À compléter…] » doivent être remplacées avant la mise en ligne
  // (le build les liste). Ces textes sont des modèles : faites-les valider si besoin.
  legal: {
    publisher: "Jade Burgunder",
    status: "Entrepreneur individuel",
    siret: "882 776 271 00018 : numéro SIRET",
    address: "2 impasse Pierre Maurand 31500 Toulouse",
    vat: " TVA non applicable, article 293 B du CGI ",
    hostName: "FreeHosting",
    hostAddress: "",
    payment: "Espèces, chèque et virement",
    cancellation: "48h avant le rdv : délai d'annulation",
    mediator: "MED CONSO DEV",
    updated: "2026-11-04"
  }
};
