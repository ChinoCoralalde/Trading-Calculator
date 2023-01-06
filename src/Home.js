import { ScrollView,} from 'react-native'
import React from 'react'
import { Button, Box, VStack, Text } from 'native-base';

const Home = () => {
  return (
      <ScrollView justifyContent="center" Flex="1" >
         
          <Box mx="3" flex={1} justifyContent="center" justifyItems="center">
              <VStack mx="2.5" my="4" space="1">
          <Button 
          borderRadius="lg"
          my="4"
          py="4"
          shadow="3"
          backgroundColor="gray.500"
          onPress={() => alert('Button pressed')}>
              <Text fontSize="xl" color="white" fontWeight="bold">Trading Calculator</Text>
          </Button> 
          <Button
         borderRadius="lg"
         my="4"
         py="4"
         shadow="3"
         backgroundColor="gray.500"
          onPress={() => alert('Button pressed')}>
            <Text fontSize="xl" color="white" fontWeight="bold" >Flip A Coin</Text>
          </Button>
        
          <Button 
          borderRadius="lg"
          my="4"
          py="4"
          shadow="3"
          backgroundColor="gray.500"
          onPress={() => alert('Button pressed')}>
             <Text fontSize="xl" color="white" fontWeight="bold">About</Text>
          </Button>
          </VStack>
        </Box>
    </ScrollView>
  )
}

export default Home