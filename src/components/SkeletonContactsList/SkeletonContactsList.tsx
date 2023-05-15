import { Flex, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const SkeletonContactsList = (props: Props) => {
  return (
    <>
      <Stack>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="48px" />
          <Skeleton height="48px" flexGrow="1" />
        </Flex>
      </Stack>
    </>
  );
};

export default SkeletonContactsList;
