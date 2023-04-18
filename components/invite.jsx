import React from 'react'
import {
    Button,
    useDisclosure,
    Modal,
    Lorem,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function Invite() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (<section>
        <h2 className={" margin_top15 flex_center text_center p_xxxlarge"}>
            Присоединение дома к УО
        </h2>
        <h4 className={'flex_center text_center w70 m_auto'}>
            Мы обеспечиваем поддержание и улучшение жилищных условий вашего объекта, и для сотрудничества - свяжитесь с нами
        </h4>
        <Button colorScheme='green' onClick={onOpen} className={"button_invite flex m_auto margin_bot15"}>
            Связаться
        </Button>

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Lorem count={2} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </section>)
}