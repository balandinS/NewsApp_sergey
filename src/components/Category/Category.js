import React from 'react';
import {Button} from 'native-base';
const Category = () => {
  return (
    <Button
      mx={{
        base: 'auto',
        md: 0,
      }}
      p="2"
      bg="cyan.500"
      _text={{
        fontSize: 14,
      }}>
      Notifications
    </Button>
  );
};

export default Category;

const styles = StyleSheet.create({});
