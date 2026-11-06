// Fichier de configuration du site : modifiez les valeurs puis lancez `npm run build`
// (ou `node build.js`) pour régénérer toutes les pages.
// Contenu des pages détaillées (prestations, animaux, blog, mentions légales) : content.config.js
// Photos : remplacez assets/fond-ecran.jpg (bannière) ou assets/jade.jpg (À propos),
// puis lancez `npm run images` pour régénérer les versions optimisées.
module.exports = {
  siteUrl: "https://jade-naturoanimal.com",

  colors: {
    bg: "#f7f2e7",          // fond général
    card: "#fbf9f3",        // fond des cartes et champs
    greenBg: "#e3ece2",     // fond vert clair (sections, pied de page)
    green: "#375545",       // vert foncé (titres, boutons)
    accent: "#4caf86",      // vert accent (traits, étoiles)
    rose: "#e7d0cb",        // rose des pastilles d'icônes
    text: "#3b3b36",        // texte principal
    muted: "#6b6b63",       // texte secondaire
    line: "#e2dccb"         // bordures
  },

  seo: {
    // Titre : 60 caractères max. Description : 70 à 160 caractères (le build vous avertit sinon).
    title: "Naturopathe animalière à Toulouse | Jade Burgunder",
    description: "Naturopathe animalière à Toulouse : alimentation, allergies, stress, kinésiologie et réflexologie pour chiens et chats. Note 5/5 sur Google.",
    siteName: "Jade Burgunder – Naturopathe animalière",
    businessDescription: "Naturopathie et kinésiologie animale à Toulouse et sa région pour chiens et chats.",
    priceRange: "30 € - 50 €",
    city: "Toulouse",
    region: "Occitanie",
    areaServed: ["Toulouse", "Haute-Garonne", "Occitanie"],
    // Questions affichées sur l'accueil (et reprises dans les données structurées FAQ)
    faq: [
      {
        q: "Qu'est-ce que la naturopathie pour les animaux ?",
        a: "Appliquée aux animaux, la naturopathie considère votre compagnon dans sa globalité : son corps, ses émotions et son environnement. Elle renforce les défenses de l'organisme par des moyens naturels."
      },
      {
        q: "La naturopathie remplace-t-elle le vétérinaire ?",
        a: "Non. La naturopathie intervient en complément du suivi vétérinaire, jamais en remplacement. En cas de symptôme inquiétant, consultez d'abord votre vétérinaire."
      },
      {
        q: "Combien coûte une séance de naturopathie animale à Toulouse ?",
        a: "Le bilan naturopathique coûte 50 €, le suivi 30 €, la séance de kinésiologie 50 € et la réflexologie cranio-sacrée 40 €."
      },
      {
        q: "Pour quels animaux consultez-vous ?",
        a: "J'accompagne les chiens et les chats."
      },
      {
        q: "Dans quelle zone intervenez-vous ?",
        a: "Je suis basée à Toulouse et j'accompagne les animaux de Toulouse et de sa région (Haute-Garonne, Occitanie). Écrivez-moi via le formulaire de contact pour convenir des modalités de la consultation."
      },
      {
        q: "Comment prendre rendez-vous ?",
        a: "Par le formulaire de contact du site ou par téléphone au +33 (0)6 82 84 26 73. Je vous réponds très rapidement."
      }
    ]
  },

  texts: {
    skipLink: "Aller au contenu",
    brandName: "Jade Burgunder",
    menuButton: "☰ Menu",
    nav: [
      { label: "Accueil", href: "#accueil" },
      { label: "À propos", href: "#a-propos" },
      { label: "Accompagnements", href: "#accompagnements" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "#contact" }
    ],

    hero: {
      name: "Jade Burgunder",
      role: "Naturopathe Animalière à Toulouse",
      imageAlt: "Naturopathe animalière à Toulouse caressant un chien dans un pré fleuri, entouré d'un chat, d'une chèvre et d'un âne",
      cta: "Prendre RDV"
    },

    intro: {
      title: ["Une approche naturelle et globale,", "pour le bien-être de vos animaux"],
      text: "Naturopathe et kinésiologue animalière à Toulouse, j'accompagne chiens et chats de Toulouse et de la Haute-Garonne avec des soins naturels : alimentation, gestion du stress, allergies et troubles digestifs."
    },

    naturopathy: {
      title: "Qu'est-ce que la naturopathie pour les animaux ?",
      paragraphs: [
        "Selon l'OMS, la naturopathie est « un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens considérés comme naturels et biologiques ». Appliquée aux animaux, elle considère votre compagnon dans sa globalité : son corps, ses émotions et son environnement.",
        "Elle intervient en complément du suivi vétérinaire, jamais en remplacement."
      ]
    },

    domains: {
      title: "Domaines souvent abordés en séance",
      items: [
        { icon: "plant", label: "Alimentation", href: "/alimentation-naturelle-chien-chat-toulouse/" },
        { icon: "heart", label: "Allergies, problèmes de peau et digestifs", href: "/blog/allergies-cutanees-chien-chat-pistes-naturelles/" },
        { icon: "brain", label: "Stress, anxiété", href: "/kinesiologie-animale-toulouse/" }
      ]
    },

    services: {
      title: "Services & Accompagnements",
      subtitle: "Praticienne en naturopathie et kinésiologie animale à Toulouse et sa région.",
      detailButton: "Voir le détail",
      detailHref: "/accompagnements/",
      moreLabel: "En savoir plus",
      // `page` = adresse de la page détaillée (définie dans content.config.js)
      items: [
        { icon: "leaf", title: "Bilan naturopathique", price: "50", duration: "1h à 1h30", schemaName: "Bilan naturopathique animal", page: "bilan-naturopathique-animal-toulouse",
          description: "Un bilan complet de l'animal : hygiène de vie, alimentation, comportement et terrain." },
        { icon: "plant", title: "Suivi naturopathique", price: "30", duration: "", schemaName: "Suivi naturopathique", page: "suivi-naturopathique-animal-toulouse",
          description: "Ajuster les conseils et accompagner l'évolution de votre compagnon dans le temps." },
        { icon: "heart", title: "Séance de kinésiologie", price: "50", duration: "1h30", schemaName: "Séance de kinésiologie animale", page: "kinesiologie-animale-toulouse",
          description: "Libérer les tensions physiques et émotionnelles par une approche douce." },
        { icon: "hand", title: "Réflexologie cranio-sacrée", price: "40", duration: "", schemaName: "Réflexologie cranio-sacrée animale", page: "reflexologie-cranio-sacree-animale-toulouse",
          description: "Un toucher subtil pour rétablir l'équilibre et apaiser l'organisme." }
      ]
    },

    animals: {
      title: "Un accompagnement pour chaque animal",
      subtitle: "Chiens et chats : une approche adaptée à chaque espèce, à Toulouse et en Haute-Garonne.",
      moreLabel: "Découvrir",
      items: [
        { icon: "dog", page: "naturopathe-chien-toulouse", title: "Naturopathe pour chien", description: "Alimentation, digestion, peau, stress : le bien-être naturel de votre chien." },
        { icon: "cat", page: "naturopathe-chat-toulouse", title: "Naturopathe pour chat", description: "Une approche douce pour les chats sensibles, stressés ou sujets aux allergies." }
      ]
    },

    about: {
      title: "À propos de moi et de mon approche",
      imageAlt: "Jade Burgunder, naturopathe et kinésiologue animalière à Toulouse, avec un grand chien blanc",
      lead: "Les animaux ont toujours été pour moi une véritable passion.",
      paragraphs: [
        "Après des études en Biologie Animale et en Écologie, un doctorat en Écologie Comportementale et une expérience dans une ONG de conservation de la faune sauvage, j'ai souhaité m'engager dans une voie qui me permettrait d'aider les animaux autrement : en prenant soin de leur santé de façon naturelle et globale.",
        "Aujourd'hui, j'accompagne chiens et chats de Toulouse et sa région, en complément du suivi vétérinaire, avec écoute et bienveillance."
      ],
      button: "Me contacter"
    },

    testimonials: {
      title: "Témoignages & avis",
      subtitle: "Quelques retours de clients",
      starsLabel: "5 étoiles sur 5",
      prev: "Avis précédent",
      next: "Avis suivant",
      // Note moyenne Google (affichée au-dessus des avis et reprise dans les données structurées)
      rating: { value: 5, best: 5, count: 19, label: "sur Google", linkLabel: "Voir tous les avis sur Google" },
      googleUrl: "https://www.google.com/maps/search/?api=1&query=Jade+Burgunder+Naturopathie+%26+Kin%C3%A9siologie+Animali%C3%A8re+Toulouse",
      items: [
        { quote: "J'ai beaucoup apprécié ma séance en kinésiologie avec Jade pour mon chat Atchoum de 16 ans. J'ai ressenti beaucoup de libération pour nous deux. Je recommande Jade pour sa gentillesse et sa connaissance.", author: "Ludivine PRIEGO", date: "décembre 2024" },
        { quote: "Nous avons rencontré Jade pour soulager notre chienne qui était sujette aux infections urinaires à répétition. Après un bilan complet, Jade nous a donné de nombreux conseils et permis de mettre en place une routine et une cure adaptée à notre chienne. Depuis ce premier rendez-vous, notre chienne tolère très bien sa cure et ne présente aucun signe infectieux. Nous recommandons Jade pour ses compétences, ses conseils et sa bienveillance.", author: "Marion Giboulot", date: "juillet 2025" },
        { quote: "J'ai fait appel à Jade pour un accompagnement en fleurs de Bach et élixirs floraux, à la fois pour ma chienne et pour moi-même. Elle nous a conseillé des composés totalement personnalisés, et en seulement 15 jours, les changements sont flagrants ! Ma chienne, qui avait des comportements réactifs difficiles à gérer, est beaucoup plus apaisée et sereine. De mon côté, j'étais envahie par des peurs assez lourdes, et je sens clairement qu'elles s'allègent jour après jour. Je recommande Jade les yeux fermés. Elle est d'une grande écoute, douce, bienveillante et très professionnelle. Elle prend vraiment le temps de comprendre et d'ajuster ses conseils avec beaucoup de soin. Merci infiniment pour ce bel accompagnement, c'est précieux !", author: "franskafred m", date: "août 2025" },
        { quote: "Ravie de cette séance avec lilas ! Dès son départ je ne reconnais pas mon chat elle est calme détendue. Merci et ça a bien touché le point qu'il faut que maman travaille aussi 🤣 Merci jade mes amitiés Séverine. …", author: "lilipop star", date: "avril 2025" },
        { quote: "Calme retrouvé pour ma lilas. Problématique de maman a travaillé. Très contente de cette première séance avec jade. Lilas a été adorable et très présente lors de la séance. Merci", author: "Severine Pelc", date: "avril 2025" },
        { quote: "J'ai rencontré Madame BURGUNDER alors que je désirais amener mon cocker Vyctor vers une alimentation saine et naturelle. Ses conseils sont simples et bien détaillés. Pour Vyctor la transition ne s'est pas bien passée mais Madame BURGUNDER la suivi jusqu'au bout demandant régulièrement des nouvelles et réajustant les conseils quand ça s'avérait utile, nécessaire. Jade BURGUNDER est une personne douce et compétente. Vraiment je recommande !", author: "Isabelle Salobert", date: "avril 2025" },
        { quote: "Jade est douce, elle est de très bon conseil et connaît très bien les animaux. 🙏 …", author: "Pauline", date: "mars 2025" },
        { quote: "De bons diagnostiques et des soins très appropriés et efficaces. Très à l'écoute. Merci beaucoup", author: "CATHERINE GENEVRIER", date: "avril 2025" },
        { quote: "Je suis très contente d'avoir consulté Jade, merci beaucoup ! 😆 Je suis allée la voir directement pour moi (Kinésiologie) et ça m'a fait beaucoup de bien ! Jade est vraiment douce, présente et elle a touché des problématiques qui m'encombrent depuis des années, je ne peux que la remercier et vous la conseiller ! La séance était très adaptée et le temps n'est pas compté, c'est une super thérapeute !", author: "Aurelia Coutarel", date: "octobre 2024" },
        { quote: "Je ne peux que recommander Jade. Elle est venue aider une de mes minette qui avait des problèmes d'allergies cutanés. Maintenant Minuit va bien mieux, elle a arrêté de se peler à sang et je la sens plus câline et épanouie. Je te remercie encore pour ton aide !", author: "Fanny M.", date: "août 2023" },
        { quote: "J'ai pu expérimenter une séance de kinesiologie avec Jade. Ce fut très surprenant et tellement juste dans l'analyse qui a été faite. J'ai pu constater dans les jours qui ont suivi la séance une libération de la problématique abordée. Merci beaucoup Jade", author: "Nadine Debez", date: "août 2023" },
        { quote: "Je recommande vivement Jade qui est formidable avec ma petite Marnie. La douceur et la bienveillance de Jade font des merveilles sur nos petits compagnons 💜 …", author: "Caroline ROBERT", date: "mars 2023" },
        { quote: "Jade est une naturopathe animalière très agréable, à l'écoute et de bon conseil, je la recommande ! 😉 …", author: "Oli Esk", date: "mars 2023" },
        { quote: "Je recommande vivement, son expertise m'a bluffée. Carlos, mon boxeur ne peut pas résister à l'envie de tout engloutir (plantes, divers objets en plastique, chaussettes etc). Elle m'a préparé un élixir à donner avec la nourriture et tout c'est arrêté. Et sans la présence de Carlos. Merci beaucoup", author: "Famille DI MARCO", date: "mai 2023" },
        { quote: "Jade est une superbe thérapeute naturopathe animalière et bien plus encore puisqu'elle touche à tout : alimentation la plus naturelle possible, adaptation du mode de vie avec mise en place d'une bonne hygiène de vie de nos animaux, huiles essentielles, fleurs de Bach et bientôt kinésiologie et soins énergétiques. Sakura et moi sommes ravies de l'avoir à nos côtés au quotidien. De plus, elle est très accessible par mail au décours des consultations et d'une aide inestimable. Merci Jade pour ma Sakura et pour vos précieux conseils. Vous êtes formidable. À très vite pour le suivi de Sakura.", author: "Annou B", date: "février 2023" },
        { quote: "Mme Burgunder est à l'écoute, très consciencieuse et est allée au fond des choses pour trouver des solutions afin d'aider mon chat qui avait un problème de surpoids et d'allergies. Grâce à ses conseils avisés tout s'est arrangé ! Je vous la conseille fortement car c'est également une personne très humaine et sympatique.", author: "Aikoneko luv", date: "avril 2022" },
        { quote: "Super rencontre pour mon chat asthmatique. Jade pose beaucoup de questions et se renseigne beaucoup avant de proposer des solutions. Je me suis sentie vraiment accompagnée, merci encore Jade", author: "Aurelie A", date: "novembre 2022" }
      ]
    },

    contact: {
      title: "Formulaire de contact",
      subtitle: "Je suis à votre écoute pour accompagner votre animal vers une meilleure santé.",
      labels: { name: "Nom", email: "Email", animal: "Type d'animal", message: "Message" },
      animals: ["Chien", "Chat", "Autre"],
      submit: "Envoyer",
      // Identifiants EmailJS (clé publique, prévue pour être visible côté navigateur)
      emailjs: {
        serviceId: "service_68bx8ec",
        templateId: "template_p6pa7kd",
        publicKey: "xcqBxgKBz1PWL6MyI"
      },
      sending: "Envoi en cours…",
      error: "L'envoi a échoué. Merci de réessayer ou de m'écrire directement par email.",
      invalid: "Merci de remplir tous les champs correctement.",
      success: "Merci ! Votre message a bien été envoyé, je vous réponds très vite."
    },

    faq: {
      title: "Questions fréquentes",
      subtitle: "Naturopathie animale à Toulouse : les réponses à vos questions"
    },

    blogTeaser: {
      title: "Conseils & actualités",
      subtitle: "Des conseils pour le bien-être naturel de vos animaux",
      allPosts: "Tous les articles"
    },

    // Textes communs aux pages détaillées (prestations, animaux, blog)
    pages: {
      breadcrumbHome: "Accueil",
      priceTitle: "Tarif et durée",
      priceFrom: "Tarif",
      durationLabel: "Durée",
      faqTitle: "Questions fréquentes",
      relatedTitle: "À découvrir aussi",
      ctaTitle: "Prendre rendez-vous",
      ctaText: "Un doute, une question ? Écrivez-moi : je vous réponds rapidement pour trouver l'accompagnement le plus adapté à votre animal.",
      ctaButton: "Prendre RDV",
      disclaimer: "La naturopathie et la kinésiologie animales ne posent aucun diagnostic médical et ne remplacent jamais le suivi de votre vétérinaire.",
      reviewsLink: "Voir les avis clients",
      servicesTitle: "Mes accompagnements",
      animalsTitle: "Par type d'animal"
    },

    accompagnements: {
      title: "Naturopathie et kinésiologie animale à Toulouse",
      metaDescription: "Bilan, suivi, kinésiologie, réflexologie, alimentation et fleurs de Bach : tous les accompagnements de Jade Burgunder, naturopathe animalière à Toulouse.",
      h1: "Mes accompagnements pour animaux à Toulouse",
      lead: "Naturopathie, kinésiologie, réflexologie, alimentation et fleurs de Bach : découvrez chaque accompagnement et trouvez celui qui convient à votre compagnon."
    },

    blog: {
      title: "Blog naturopathie animale | Conseils pour chiens et chats",
      metaDescription: "Conseils de Jade Burgunder, naturopathe animalière à Toulouse : alimentation, allergies, stress, fleurs de Bach. Des réponses simples pour vos animaux.",
      h1: "Le blog de la naturopathie animale",
      lead: "Alimentation, stress, allergies, fleurs de Bach… des conseils concrets pour le bien-être naturel de votre chien ou de votre chat.",
      readMore: "Lire l'article",
      readingTime: "min de lecture",
      publishedOn: "Publié le",
      updatedOn: "Mis à jour le",
      authorTitle: "À propos de l'auteure",
      authorText: "Jade Burgunder est naturopathe et kinésiologue animalière à Toulouse. Formée en Biologie Animale et en Écologie, docteure en Écologie Comportementale, elle accompagne chiens et chats avec une approche naturelle et globale, en complément du suivi vétérinaire.",
      authorLink: "Découvrir mon parcours",
      moreArticles: "Autres articles"
    },

    notFound: {
      title: "Page introuvable | Jade Burgunder",
      h1: "Cette page est introuvable",
      text: "La page que vous cherchez n'existe plus ou a changé d'adresse.",
      button: "Retour à l'accueil"
    },

    footer: {
      quote: "« Lorsque vous observez un animal, vous touchez quelque chose d'éternel. »",
      quoteAuthor: "— Eckhart Tolle",
      servicesTitle: "Accompagnements",
      animalsTitle: "Par animal",
      blogTitle: "Derniers articles",
      contactTitle: "Contact",
      email: "jade.naturoanimal@gmail.com",
      phone: "+33 (0)6 82 84 26 73",
      phoneLink: "+33682842673",
      termsTitle: "Termes",
      terms: [
        { label: "Mentions légales", href: "/mentions-legales/" },
        { label: "Conditions générales", href: "/conditions-generales/" },
        { label: "Politique de confidentialité", href: "/politique-de-confidentialite/" }
      ],
      followTitle: "Suivez-moi",
      instagram: "https://www.instagram.com/jade.naturoanimal/",
      facebook: "https://www.facebook.com/jade.burgunder.naturopathie.animale/",
      copyright: "© 2026 Jade Burgunder N.A. — Tous droits réservés"
    }
  }
};
