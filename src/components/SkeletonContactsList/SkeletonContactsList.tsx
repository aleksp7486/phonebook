import { Flex, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react';
import React from 'react';

const SkeletonContactsList: React.FC = () => {
  return (
    <>
      <Stack>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
        <Flex width="100%" gap={4} alignItems="center">
          <SkeletonCircle size="12" />
          <Skeleton height="12" flexGrow="1" />
        </Flex>
      </Stack>
    </>
  );
};

export default SkeletonContactsList;
