import { Flex, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react';

const SkeletonContactsList = () => {
  return (
    <Stack py={4}>
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
  );
};

export default SkeletonContactsList;
