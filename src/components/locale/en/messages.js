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
    'Get access': 'Get access',
    'No results': 'No results',
    'Search for another file <0>ID</0>': 'Search for another file <0>ID</0>',
    results: 'results',
    'Search again by location': 'Search again by location',
    'To test the API, you are able to search by Location or File <0>ID</0>.':
      'To test the API, you are able to search by Location or File <0>ID</0>.',
    'Search by Location or File <0>ID</0>':
      'Search by Location or File <0>ID</0>',
    Alpha: 'Alpha',
    'This is an internal service.': 'This is an internal service.',
    'To provide feedback, email us': 'To provide feedback, email us',
    Privacy: 'Privacy',
    'Ready to use the Energuide API?': 'Ready to use the Energuide API?',
    'Natural Resources Canada': 'Natural Resources Canada',
    'EnerGuide API': 'EnerGuide API',
    'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access the data, and will be able to query to an individual dwelling.':
      'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access the data, and will be able to query to an individual dwelling.',
    'Test the API': 'Test the API',
    'View the documentation': 'View the documentation',
    'What is an API?': 'What is an API?',
    'An API, or <0>Application Programming Interface</0>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      'An API, or <0>Application Programming Interface</0>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.',
    'What are the benefits of the EnerGuide API?':
      'What are the benefits of the EnerGuide API?',
    'View open source data': 'View open source data',
    'The EnerGuide API will help make housing evaluation data accessible for everyone.':
      'The EnerGuide API will help make housing evaluation data accessible for everyone.',
    'Query specific data': 'Query specific data',
    'You can choose to access the granular data that you need.':
      'You can choose to access the granular data that you need.',
    'Access current data': 'Access current data',
    'As new housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.':
      'As new housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.',
    'How can I use the EnerGuide API?': 'How can I use the EnerGuide API?',
    'To learn how to use the API, we have provided the <0>documentation on Github.</0>The documentation will show all of the data types available under the EnerGuide API.':
      'To learn how to use the API, we have provided the <0>documentation on Github.</0>The documentation will show all of the data types available under the EnerGuide API.',
    Search: 'Search',
    'Search by location': 'Search by location',
    Results: 'Results',
    'To see all of the available data,': 'To see all of the available data,',
    'view the EnerGuide API documentation':
      'view the EnerGuide API documentation',
    'on GitHub.': 'on GitHub.',
    'File <0>ID</0>': 'File <0>ID</0>',
    'Search by file <0>ID</0>': 'Search by file <0>ID</0>',
    'Which parameter would you like to search by?':
      'Which parameter would you like to search by?',
    Location: 'Location',
    'Search by the file <0>ID</0> on your Energuide evaluation.':
      'Search by the file <0>ID</0> on your Energuide evaluation.',
    'No results found': 'No results found',
    'Search for a region by submitting the first three digits of a postal code.':
      'Search for a region by submitting the first three digits of a postal code.',
    Filters: 'Filters',
    'Search by the type of energy source.':
      'Search by the type of energy source.',
    Electricity: 'Electricity',
    'Natural gas': 'Natural gas',
    Propane: 'Propane',
    Oil: 'Oil',
    All: 'All',
    Home: 'Home',
    'Thank you': 'Thank you',
    'Get Access': 'Get Access',
    'To test the API, you are able to search by Location or File number.':
      'To test the API, you are able to search by Location or File number.',
    'Search by Location or File number': 'Search by Location or File number',
    'File number': 'File number',
    '<0>Alpha</0>This is an internal service. <1>To provide feedback, email us</1>.':
      '<0>Alpha</0>This is an internal service. <1>To provide feedback, email us</1>.',
    'The EnerGuide API allows you to access the housing data provided by Natural Resource Canada. You will have open access to the data, with granularity to search to a individual dwelling level.':
      'The EnerGuide API allows you to access the housing data provided by Natural Resource Canada. You will have open access to the data, with granularity to search to a individual dwelling level.',
    'An <0>API</0>, or <1>Application Programming Interface</1>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      'An <0>API</0>, or <1>Application Programming Interface</1>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.',
    'To learn how to use the API, we have provided the documentation on Github. The documentation will show all of the data types available under the EnerGuide API.':
      'To learn how to use the API, we have provided the documentation on Github. The documentation will show all of the data types available under the EnerGuide API.',
    'Search by the type of energy source. Choose the parameter that applies.':
      'Search by the type of energy source. Choose the parameter that applies.',
    Any: 'Any',
    'To see how it can be used,': 'To see how it can be used,',
    'test the API': 'test the API',
    'Alpha - This is an internal service':
      'Alpha - This is an internal service',
    'What is the EnerGuide API?': 'What is the EnerGuide API?',
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
