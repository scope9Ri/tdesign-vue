import { mount } from '@vue/test-utils';
import { Progress } from '@/src/progress/index.ts';
import { PRO_THEME, CIRCLE_SIZE } from '@/src/progress/constants.ts';

const STATUS_TEXT = ['success', 'error', 'warning', 'active'];

describe('Progress', () => {
  it('pure progress contains one class', () => {
    const wrapper = mount(Progress);
    const classes = wrapper.classes();
    expect(classes).toContain('t-progress');
    expect(wrapper).toMatchSnapshot();
  });

  describe(':props', () => {
    describe(':theme', () => {
      Object.values(PRO_THEME).forEach((theme) => {
        it(`:theme:${theme}`, () => {
          const wrapper = mount({
            render() {
              return <Progress theme={theme}></Progress>;
            },
          });
          expect(wrapper.findComponent(Progress).vm.theme).toBe(theme);
          expect(wrapper).toMatchSnapshot();
        });
      });
      it(':theme line and plump progress have t-progress__inner class', () => {
        const lineWrapper = mount({
          render() {
            return <Progress theme={'line'}></Progress>;
          },
        });
        const lineClass = lineWrapper.element.querySelector('.t-progress__inner');

        const plumpWrapper = mount({
          render() {
            return <Progress theme={'plump'}></Progress>;
          },
        });
        const plumpClass = plumpWrapper.element.querySelector('.t-progress__inner');

        expect(lineClass !== undefined && lineClass !== null).toBe(true);
        expect(lineWrapper).toMatchSnapshot();

        expect(plumpClass !== undefined && plumpClass !== null).toBe(true);
        expect(plumpWrapper).toMatchSnapshot();
      });
      it(':theme circle progress has t-progress__circle-outer and t-progress__circle-inner class', () => {
        const wrapper = mount({
          render() {
            return <Progress theme={'circle'} percentage={'10'}></Progress>;
          },
        });
        const outerClass = wrapper.element.querySelector('.t-progress__circle-outer');
        const innerClass = wrapper.element.querySelector('.t-progress__circle-inner');
        expect(outerClass !== undefined && outerClass !== null).toBe(true);
        expect(innerClass !== undefined && innerClass !== null).toBe(true);
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':percentage', () => {
      it(':percentage is between 0 to 100, equal to 50', () => {
        const wrapper = mount({
          render() {
            return <Progress percentage={50}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.percentage).toBe(50);
        expect(wrapper).toMatchSnapshot();
      });
      it(':percentage is less than 0, equal to -10', () => {
        const wrapper = mount({
          render() {
            return <Progress percentage={-10}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.percentage).toBe(-10);
        expect(wrapper).toMatchSnapshot();
      });
      it(':percentage is great equal than 100, equal to 200', () => {
        const wrapper = mount({
          render() {
            return <Progress percentage={200}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.percentage).toBe(200);
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':label', () => {
      it(':label is String, equal to "custom label test"', () => {
        const wrapper = mount({
          render() {
            return <Progress label={'custom label test'}></Progress>;
          },
        });

        expect(wrapper.findComponent(Progress).vm.label).toBe('custom label test');
        expect(wrapper).toMatchSnapshot();
      });
      it(':label is boolean, equal to true', () => {
        const wrapper = mount({
          render() {
            return <Progress label={true}></Progress>;
          },
        });

        expect(wrapper.findComponent(Progress).vm.label).toBe(true);
        expect(wrapper).toMatchSnapshot();
      });
      it(':label is boolean, equal to false', () => {
        const wrapper = mount({
          render() {
            return <Progress label={false}></Progress>;
          },
        });

        expect(wrapper.findComponent(Progress).vm.label).toBe(false);
        expect(wrapper).toMatchSnapshot();
      });
      it(':label is TNode, equal to () => "tnode"', () => {
        const wrapper = mount({
          render() {
            return <Progress label={() => 'tnode'}></Progress>;
          },
        });

        const el = wrapper.element.querySelector('.t-progress__info');
        expect(el.textContent).toBe('tnode');
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':status', () => {
      STATUS_TEXT.forEach((status) => {
        it(`:status is ${status}`, () => {
          const wrapper = mount({
            render() {
              return <Progress status={status}></Progress>;
            },
          });
          expect(wrapper.findComponent(Progress).vm.status).toBe(status);
          expect(wrapper).toMatchSnapshot();
        });
      });
    });

    describe(':color', () => {
      it(':color is String, equal to "#aaa"', () => {
        const wrapper = mount({
          render() {
            return <Progress color={'#aaa'}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.color).toBe('#aaa');
        expect(wrapper).toMatchSnapshot();
      });
      it(':color is Object, equal to { "0%": "#f00", "100%": "#0ff" }', () => {
        const wrapper = mount({
          render() {
            return <Progress color={{ '0%': '#f00', '100%': '#0ff' }}></Progress>;
          },
        });
        expect(wrapper).toMatchSnapshot();
      });
      it(':color is Array, equal to ["#f00", "#0ff", "#f0f"]', () => {
        const wrapper = mount({
          render() {
            return <Progress color={['#f00', '#0ff', '#f0f']}></Progress>;
          },
        });
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':trackColor', () => {
      it(':trackColor is "#aaa"', () => {
        const wrapper = mount({
          render() {
            return <Progress trackColor={'#aaa'}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.trackColor).toBe('#aaa');
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':strokeWidth', () => {
      it(':strokeWidth is String, equal to "50px"', () => {
        const wrapper = mount({
          render() {
            return <Progress strokeWidth={'50px'}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.strokeWidth).toBe('50px');
        expect(wrapper).toMatchSnapshot();
      });
      it(':strokeWidth is Number, equal to 50', () => {
        const wrapper = mount({
          render() {
            return <Progress strokeWidth={50}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.strokeWidth).toBe(50);
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe(':size', () => {
      Object.values(CIRCLE_SIZE).forEach((size) => {
        it(`:size is String, equal to "${size}"`, () => {
          const wrapper = mount({
            render() {
              return <Progress size={size}></Progress>;
            },
          });
          expect(wrapper.findComponent(Progress).vm.size).toBe(size);
          expect(wrapper).toMatchSnapshot();
        });
      });
      it(':size is Number, equal to 50', () => {
        const wrapper = mount({
          render() {
            return <Progress size={50}></Progress>;
          },
        });
        expect(wrapper.findComponent(Progress).vm.size).toBe(50);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
