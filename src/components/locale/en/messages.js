module.exports = {
  l: {
    p: function(n, ord) {
      var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2)
      if (ord)
        return n10 == 1 && n100 != 11
          ? 'one'
          : n10 == 2 && n100 != 12
            ? 'two'
            : n10 == 3 && n100 != 13 ? 'few' : 'other'
      return n == 1 && v0 ? 'one' : 'other'
    },
  },
  m: {
    '<0>Alpha</0>This is an internal service. <1>To provide feedback, email us</1>.':
      '<0>Alpha</0>This is an internal service. <1>To provide feedback, email us</1>.',
    'The EnerGuide API allows you to access the housing data provided by Natural Resource Canada. You will have open access to the data, with granularity to search to a individual dwelling level.':
      'The EnerGuide API allows you to access the housing data provided by Natural Resource Canada. You will have open access to the data, with granularity to search to a individual dwelling level.',
    'View the documentation': 'View the documentation',
    'An <0>API</0>, or <1>Application Programming Interface</1>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      'An <0>API</0>, or <1>Application Programming Interface</1>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.',
    'View open source data': 'View open source data',
    'The EnerGuide API will help make housing evaluation data accessible for everyone.':
      'The EnerGuide API will help make housing evaluation data accessible for everyone.',
    'You can choose to access the granular data that you need.':
      'You can choose to access the granular data that you need.',
    'As new housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.':
      'As new housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.',
    'To learn how to use the API, we have provided the documentation on Github. The documentation will show all of the data types available under the EnerGuide API.':
      'To learn how to use the API, we have provided the documentation on Github. The documentation will show all of the data types available under the EnerGuide API.',
    'Search by file <0>ID</0>': 'Search by file <0>ID</0>',
    'File <0>ID</0>': 'File <0>ID</0>',
    'Search by the file <0>ID</0> on your Energuide evaluation.':
      'Search by the file <0>ID</0> on your Energuide evaluation.',
    'No results found': 'No results found',
    Filters: 'Filters',
    'Search by the type of energy source. Choose the parameter that applies.':
      'Search by the type of energy source. Choose the parameter that applies.',
    Any: 'Any',
    Propane: 'Propane',
    Privacy: 'Privacy',
    'Natural Resources Canada': 'Natural Resources Canada',
    'EnerGuide API': 'EnerGuide API',
    'Test the API': 'Test the API',
    'What is an API?': 'What is an API?',
    'What are the benefits of the EnerGuide API?':
      'What are the benefits of the EnerGuide API?',
    'Query specific data': 'Query specific data',
    'Access current data': 'Access current data',
    'How can I use the EnerGuide API?': 'How can I use the EnerGuide API?',
    'To see how it can be used,': 'To see how it can be used,',
    'test the API': 'test the API',
    'Ready to use the Energuide API?': 'Ready to use the Energuide API?',
    Location: 'Location',
    'Which parameter would you like to search by?':
      'Which parameter would you like to search by?',
    'To test the API, you are able to search by Location or File number.':
      'To test the API, you are able to search by Location or File number.',
    'Search by Location or File number': 'Search by Location or File number',
    'File number': 'File number',
    Search: 'Search',
    'To see all of the available data,': 'To see all of the available data,',
    'view the EnerGuide API documentation':
      'view the EnerGuide API documentation',
    'on GitHub.': 'on GitHub.',
    'Search by location': 'Search by location',
    'Search for a region by submitting the first three digits of a postal code.':
      'Search for a region by submitting the first three digits of a postal code.',
    Oil: 'Oil',
    Electricity: 'Electricity',
    'Natural gas': 'Natural gas',
    Home: 'Home',
    'Thank you': 'Thank you',
    'Alpha - This is an internal service':
      'Alpha - This is an internal service',
    'What is the EnerGuide API?': 'What is the EnerGuide API?',
    'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access the data, and will be able to query to an individual dwelling.':
      'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access the data, and will be able to query to an individual dwelling.',
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
