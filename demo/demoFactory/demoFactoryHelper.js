import DemoFactory from './DemoFactory';
import TypeConfig from './constants/TypeConstants';

export function getDemoFactory() {
    return new DemoFactory(TypeConfig.edit);
}