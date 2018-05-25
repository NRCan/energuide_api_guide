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
            : n10 == 3 && n100 != 13
              ? 'few'
              : 'other'
      return n == 1 && v0 ? 'one' : 'other'
    },
  },
  m: {
    Alpha: 'Alpha',
    'This is a demonstration of how the API could be used.':
      'This is a demonstration of how the API could be used.',
    'Help us improve this internal service, email your feedback':
      'Help us improve this internal service, email your feedback',
    Privacy: 'Privacy',
    'Ready to use the Energuide API?': 'Ready to use the Energuide API?',
    'Get access': 'Get access',
    'Natural Resources Canada': 'Natural Resources Canada',
    'EnerGuide API': 'EnerGuide API',
    'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access to the data, and will be able to query to an individual dwelling.':
      'The EnerGuide API allows you to access the housing data provided by Natural Resources Canada. You will have open access to the data, and will be able to query to an individual dwelling.',
    'Test the API': 'Test the API',
    'View the documentation': 'View the documentation',
    'What is an API?': 'What is an API?',
    'An API, or <0>Application Programming Interface</0>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.':
      'An API, or <0>Application Programming Interface</0>, is a set of routines, protocols and tools for building software. An API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.',
    'What are the benefits of the EnerGuide API?':
      'What are the benefits of the EnerGuide API?',
    'View open data': 'View open data',
    'The EnerGuide API will help make housing evaluation data accessible for everyone.':
      'The EnerGuide API will help make housing evaluation data accessible for everyone.',
    'Query specific data': 'Query specific data',
    'You can choose to access the granular data that you need.':
      'You can choose to access the granular data that you need.',
    'Access current data': 'Access current data',
    'As more housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.':
      'As more housing evaluations are added to the EnerGuide API, the data will be updated and available for you to use.',
    'How can I use the EnerGuide API?': 'How can I use the EnerGuide API?',
    'To learn how to use the API, we have provided the <0>documentation on Github.</0>The documentation will show all of the data types available under the EnerGuide API.':
      'To learn how to use the API, we have provided the <0>documentation on Github.</0>The documentation will show all of the data types available under the EnerGuide API.',
    'No results': 'No results',
    'Search for another file <0>ID</0>': 'Search for another file <0>ID</0>',
    Search: 'Search',
    'Search by location': 'Search by location',
    Results: 'Results',
    'To see all of the available data,': 'To see all of the available data,',
    'view the EnerGuide API documentation':
      'view the EnerGuide API documentation',
    'on GitHub.': 'on GitHub.',
    'tonnes/year': 'tonnes/year',
    'File <0>ID</0>': 'File <0>ID</0>',
    'Search by file <0>ID</0>': 'Search by file <0>ID</0>',
    results: 'results',
    'Search again by location': 'Search again by location',
    'Which parameter would you like to search by?':
      'Which parameter would you like to search by?',
    'To test the API, you are able to search by Location or File <0>ID</0>.':
      'To test the API, you are able to search by Location or File <0>ID</0>.',
    'Search by Location or File <0>ID</0>':
      'Search by Location or File <0>ID</0>',
    Location: 'Location',
    'Search by the file <0>ID</0> on your Energuide evaluation.':
      'Search by the file <0>ID</0> on your Energuide evaluation.',
    'No results found': 'No results found',
    'Search for a region by submitting the first three digits of a postal code.':
      'Search for a region by submitting the first three digits of a postal code.',
    Filters: 'Filters',
    'Search by type of dwelling.': 'Search by type of dwelling.',
    'Single detached': 'Single detached',
    'Detached Duplex': 'Detached Duplex',
    'Row house, end unit': 'Row house, end unit',
    'Row house, middle unit': 'Row house, middle unit',
    Apartment: 'Apartment',
    All: 'All',
    Home: 'Home',
    'Thank you': 'Thank you',
  },
}
