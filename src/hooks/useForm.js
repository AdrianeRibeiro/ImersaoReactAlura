import React, { useState } from 'react'

export default function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais)

  function handleOnChange(e) {
    let name = e.target.name
    let value = e.target.value

    setValores({
      ...valores,
      [name]: value,
    })
  }

  function clearForm() {
    setValores(valoresIniciais)
  }

  return {
    valores,
    handleOnChange,
    clearForm
  }
}