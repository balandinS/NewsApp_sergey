/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import * as TYPES from '../../store/News/types';
import {Button, Stack, Box, Center, Input, VStack} from 'native-base';
const NewsFeeds = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: TYPES.START_NEWS_SAGA});
  }, []);
  return (
    <Box flex="1" safeAreaTop borderColor="white">
      <Center>
        <Stack mt={3} space={4} w="75%" maxW="300px">
          <Input size="md" placeholder="search article" />
        </Stack>
      </Center>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <VStack space="2.5" mt="4" px="8">
          <Stack
            mb="2.5"
            mt="1.5"
            direction="row"
            alignItems={{
              base: 'center',
              md: 'flex-start',
            }}
            space={2}
            mx={{
              base: 'auto',
              md: '0',
            }}>
            {[
              'business',
              'entertainment',
              'general',
              'health',
              'science',
              'sports',
              'technology',
            ].map((category, index) => (
              <Button
                key={index}
                onPress={() =>
                  dispatch({type: TYPES.UPDATE_CATEGORY, payload: category})
                }>
                {category}
              </Button>
            ))}
          </Stack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default NewsFeeds;

const styles = StyleSheet.create({});
