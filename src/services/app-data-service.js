import initialData from './initial-data'

export const loadAppData = () => {
  let bd = localStorage.getItem('data')
  if (bd == null) {
    let initalDataStr = JSON.stringify(initialData)
    console.log(initalDataStr)
    console.log('Sem banco de dadosCriando banco')
    bd = initialData
    localStorage.setItem('data', initalDataStr)
  }
  bd = localStorage.getItem('data')
  console.log('valor do bd ' + bd)
  let data = JSON.parse(bd)

  return data
}

export const saveAppData = newData => {
  console.log('Tentando salvar')
  let initalDataStr = JSON.stringify(newData)

  localStorage.setItem('data', initalDataStr)

  console.log('Novos dados salvos')
}

export const saveNewLead = newLead => {
  console.log('Tentando newLead')
  console.log(newLead)

  let bd = localStorage.getItem('data')
  let data = JSON.parse(bd)
  let keys = Object.keys(data.leads)
  let numLeads = keys.length
  numLeads += 1
  let leadId = 'lead-' + numLeads

  let obj = { id: leadId, content: newLead }
  data.leads[leadId] = obj

  data.etapas['etapa-1'].leadIds.push(leadId)
  let newData = JSON.stringify(data)
  localStorage.setItem('data', newData)

  console.log('newLead salvos')
}
