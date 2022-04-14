/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import * as TYPES from '../../store/News/types';
import {Flex, Stack, Box, Center, Input} from 'native-base';
const NewsFeeds = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: TYPES.START_NEWS_SAGA});
  }, []);
  return (
    <Box flex="1" safeAreaTop>
      <Center>
        <Stack mt={3} space={4} w="75%" maxW="300px">
          <Input size="md" placeholder="search article" />
        </Stack>
      </Center>
    </Box>
  );
};

export default NewsFeeds;

const styles = StyleSheet.create({});
