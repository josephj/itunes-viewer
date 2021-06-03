/* eslint-disable import/no-extraneous-dependencies */
import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({ test: multiSnapshotWithOptions() });
