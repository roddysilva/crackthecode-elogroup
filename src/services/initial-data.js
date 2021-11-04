const initialData = {
  leads: {
    'lead-1': { id: 'lead-1', content: 'Org. Internacionais' },
    'lead-2': { id: 'lead-2', content: 'Ind. Farm. LTDA' },
    'lead-3': { id: 'lead-3', content: 'Music Sound Livre Cmp' },
    'lead-4': { id: 'lead-4', content: 'Ind Publicidade LTDA' }
  },
  etapas: {
    'etapa-1': {
      id: 'etapa-1',
      title: 'Cliente em Potencial',
      leadIds: ['lead-1', 'lead-2', 'lead-3', 'lead-4']
    },
    'etapa-2': {
      id: 'etapa-2',
      title: 'Dados Confirmados',
      leadIds: []
    },
    'etapa-3': {
      id: 'etapa-3',
      title: 'Reunião Agendada',
      leadIds: []
    }
  },

  etapaOrder: ['etapa-1', 'etapa-2', 'etapa-3']
}

export default initialData
