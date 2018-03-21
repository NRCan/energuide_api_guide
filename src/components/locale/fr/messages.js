module.exports = {
  l: {
    p: function(n, ord) {
      if (ord) return n == 1 ? 'one' : 'other'
      return n >= 0 && n < 2 ? 'one' : 'other'
    },
  },
  m: {
    Alpha: 'Alpha',
    'This is an internal service.': 'Ceci est un service interne',
    'To provide feedback, email us':
      'Pour envoyer vos commentaires, envoyez-nous un e-mail',
    'To see all of the available data,':
      'Pour voir toutes les donn\xE9es disponibles,',
    Privacy: 'Confidentialit\xE9',
    'Ready to use the Energuide API?': "Pr\xEAt \xE0 utiliser l'API EnerGuide?",
    'Get Access': 'Acc\xE9der',
    'Natural Resources Canada': 'Ressources naturelles Canada',
    'EnerGuide API': "L'API EnerGuide",
    'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access the data, and will be able to query to an individual dwelling.':
      "L'API \xC9nerGuide vous permet d'acc\xE9der aux donn\xE9es sur les cotes d\u2019\xE9nergie r\xE9sidentielle par Ressources naturelles Canada. Vous aurez un acc\xE8s ouvert aux donn\xE9es, avec un niveau de granularit\xE9 pour chercher des logements individuels.",
    'Test the API': "Testez l'API",
    'View the documentation': 'Voir la documentation',
    'What is an API?': "Qu'est-ce qu'une API?",
    'An API, or <0>Application Programming Interface</0>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      "Une interface de programmation d'application, ou API, est un ensemble de routines, de protocoles et d'outils pour cr\xE9er des logiciels. Une API facilite le d\xE9veloppement d'un programme informatique en fournissant tous les blocs de construction, qui sont ensuite mis en place par le programmeur.",
    'What are the benefits of the EnerGuide API?':
      "Quels sont les avantages de l'API \xC9nerGuide?",
    'View open source data': 'Voir les donn\xE9es libres',
    'The EnerGuide API will help make housing evaluation data accessible for everyone.':
      "L'API \xC9nerGuide aidera \xE0 rendre les donn\xE9es d'\xE9valuation du logement accessibles \xE0 tous.",
    'Query specific data': 'Requ\xEAte de donn\xE9es sp\xE9cifiques',
    'You can choose to access the granular data that you need.':
      "Vous pouvez choisir d'acc\xE9der aux donn\xE9es granulaires dont vous avez besoin.",
    'Access current data': 'Acc\xE9der aux donn\xE9es actuelles',
    'As new housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.':
      "\xC0 mesure que de nouvelles \xE9valuations de logement sont ajout\xE9es \xE0 l'API \xC9nerGuide, les donn\xE9es seront mises \xE0 jour et mises \xE0 votre disposition.",
    'How can I use the EnerGuide API?':
      "Comment puis-je utiliser l'API \xC9nerGuide?",
    'To learn how to use the API, we have provided the <0>documentation on Github.</0>The documentation will show all of the data types available under the EnerGuide API.':
      "Pour apprendre \xE0 utiliser l'API, nous avons fourni la documentation sur Github. La documentation montrera tous les types de donn\xE9es disponibles dans l'API \xC9nerGuide.",
    Search: 'Recherche',
    'Search by location': 'Rechercher par lieu',
    Results: 'R\xE9sultats',
    'view the EnerGuide API documentation':
      "voir la documentation de l'API EnerGuide",
    'on GitHub.': 'sur GitHub',
    'Which parameter would you like to search by?':
      'Quel param\xE8tre souhaitez-vous rechercher?',
    'To test the API, you are able to search by Location or File number.':
      "Pour tester l'API, vous pouvez effectuer une recherche par emplacement ou par num\xE9ro de fichier.",
    'Search by Location or File number':
      'Recherche par lieu ou num\xE9ro de fichier.',
    Location: 'Location',
    'File number': 'Num\xE9ro de fichier',
    'Search by file <0>ID</0>': 'Recherche par fichier ID ',
    'File <0>ID</0>': 'Fichier ID',
    'Search by the file <0>ID</0> on your Energuide evaluation.':
      'Recherchez par le fichier ID sur votre \xE9valuation Energuide.',
    'No results found': 'Aucun r\xE9sultat trouv\xE9',
    'Search for a region by submitting the first three digits of a postal code.':
      "Recherchez une r\xE9gion en soumettant les trois premiers chiffres d'un code postal.",
    Filters: 'Filtres',
    'Search by the type of energy source.':
      "Recherche par type de source d'\xE9nergie",
    Electricity: '\xC9lectricit\xE9',
    'Natural gas': 'Gaz naturel',
    Propane: 'Propane',
    Oil: 'P\xE9trole',
    All: 'tout',
    Home: 'Domicile',
    'Thank you': 'Merci',
    '<0>Alpha</0>This is an internal service. <1>To provide feedback, email us</1>.':
      'Alpha Ceci est un service interne. Pour nous faire part de vos commentaires, envoyez-nous un e-mail.',
    'Pour voir toutes les donn\xE9es disponibles,':
      'Pour voir toutes les donn\xE9es disponibles,',
    'The EnerGuide API allows you to access the housing data provided by Natural Resource Canada. You will have open access to the data, with granularity to search to a individual dwelling level.':
      "L'API \xC9nerGuide vous permet d'acc\xE9der aux donn\xE9es sur le logement fournies par Ressources naturelles Canada. Vous aurez un acc\xE8s ouvert aux donn\xE9es, avec une granularit\xE9 pour rechercher un niveau de logement individuel.",
    'An <0>API</0>, or <1>Application Programming Interface</1>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      "Une interface de programmation d'application, ou API, est un ensemble de routines, de protocoles et d'outils pour cr\xE9er des logiciels. Une API facilite le d\xE9veloppement d'un programme informatique en fournissant tous les blocs de construction, qui sont ensuite mis en place par le programmeur.",
    'To learn how to use the API, we have provided the documentation on Github. The documentation will show all of the data types available under the EnerGuide API.':
      "Pour apprendre \xE0 utiliser l'API, nous avons fourni la documentation sur Github. La documentation montrera tous les types de donn\xE9es disponibles dans l'API \xC9nerGuide.",
    'Search by the type of energy source. Choose the parameter that applies.':
      "Recherche par type de source d'\xE9nergie. Choisissez le param\xE8tre qui s'applique.",
    Any: 'Tout',
    'To see how it can be used,':
      'Pour voir comment il peut \xEAtre utilis\xE9',
    'test the API': "testez l'API",
    'Alpha - This is an internal service':
      'Alpha - Ceci est un service interne',
    'What is the EnerGuide API?': "Qu'est-ce que l'API EnerGuide?",
    'Access the API': 'Access the API',
    'An <0>Application Programming Interface</0>, or<1>API</1>, is a set of routines, protocols and tools for building software. Many applications can talk to each other and deliver a response.':
      'An <0>Application Programming Interface</0>, or<1>API</1>, is a set of routines, protocols and tools for building software. Many applications can talk to each other and deliver a response.',
    'View open data': 'View open data',
    'The EnerGuide API will help make energy consumption data accessible for everyone.':
      'The EnerGuide API will help make energy consumption data accessible for everyone.',
    'You can choose to access the granular data that you need. You will benefit from the ability to extract data data that is specific to your needs.':
      'You can choose to access the granular data that you need. You will benefit from the ability to extract data data that is specific to your needs.',
    'Developers and data analysts can allow users to query specific information from large data sets. They set the rules that will guide the user to what they need.':
      'Developers and data analysts can allow users to query specific information from large data sets. They set the rules that will guide the user to what they need.',
    'Read the documentation': 'Read the documentation',
    'Search by': 'Search by',
    'Search by Location': 'Search by Location',
    'Search by the type of energy source. Choose all of the parameters that apply.':
      'Search by the type of energy source. Choose all of the parameters that apply.',
    'An <0>Application Programming Interface</0>Application Programming Interface, or<1>API</1>, is a set of routines, protocols and tools for building software. Many applications can talk to each other and deliver a response.':
      'An <0>Application Programming Interface</0>Application Programming Interface, or<1>API</1>, is a set of routines, protocols and tools for building software. Many applications can talk to each other and deliver a response.',
    HOME: 'Home',
  },
}
