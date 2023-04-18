import React from 'react'
import { getAddresses } from "@/lib/datocms"
import styles from "./cabinet.module.css"
import emailjs from "@emailjs/browser";
import {
  Input,
  InputGroup,
  Select,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Button,
  Textarea
} from '@chakra-ui/react'

const Cabinet = ({ address }) => {

  function sendApplication(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = {}
    for (const iterator of formData.entries()) {
      data[iterator[0]] = iterator[1]
    }
    console.table(data)
  }

  return <main className={styles.main}>

    <form onSubmit={sendApplication}>
      <VStack spacing='24px'>

        <HStack spacing='24px'>
          <FormControl>
            <FormLabel>Выберите адрес</FormLabel>
            <Select defaultValue={address[0].address} required name='address' placeholder='Выберите адрес'>
              {address.map(x => <option key={x.id}>{x.address}</option>)}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Квартира</FormLabel>
            <Input required name='appartment' type='number' placeholder='123' />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Обращение</FormLabel>
          <Textarea required name='application' placeholder='Торжественно клянусь, что замышляю только шалость' />
        </FormControl>

        <FormControl>
          <FormLabel>Номер договора</FormLabel>
          <InputGroup size='md'>
            <Input name='agreement' type='text' placeholder='10490194019409' />
          </InputGroup>
        </FormControl>

        <Button colorScheme='blue' variant='outline' type="submit">
          Отправить
        </Button>
      </VStack>
    </form>
  </main>
}

export default Cabinet

export async function getStaticProps() {
  const address = await getAddresses()
  return {
    props: { address },
  }
}

const data = {

  'FIO': order.name,
  'Email': order.email,
  'phone': order.phone,
  'list': JSON.stringify(emailList, null, 2),
  'delivery_method': order.delivery,
  'address': clientDelivery,
  'comment': order.comment,
}
emailjs
  .send(
    "service_meeb64l",
    "template_3i6j7qf",
    orderData,
    "Igg7aXsdDmTo0FNZG"
  )
  .then((result) => console.log("result.text", result.text))
  .catch((error) => console.error("catch error.text", JSON.stringify(error)))
  .finally(() => console.log("finally"));