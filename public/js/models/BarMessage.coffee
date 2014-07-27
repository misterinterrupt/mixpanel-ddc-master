define [
  'MixPanel'
  'MixPanel/collections/mixins/Socket'
], (MixPanelFactory) ->

  MixPanelFactory.extend 'Model', 'BarMessage.Model', {
    url: '/drinks'
  }, {
    mixins: [
      'Socket.CollectionMixin'
    ]
  }
