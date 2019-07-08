import { oneOfType, number, string, object, bool } from 'prop-desc'

export const systemProps = [
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'opacity',
  'overflow',
  'transition',
  'border',
  'borderTop',
  'borderTopColor',
  'borderRight',
  'borderRightColor',
  'borderBottom',
  'borderBottomColor',
  'borderLeft',
  'borderLeftColor',
  'borderColor',
  'borderWidth',
  'borderStyle',
  'borderRadius',
  'boxShadow',
  'display',
  'alignItems',
  'alignContent',
  'justifyContent',
  'justifyItems',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
  'display',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'size',
  'verticalAlign',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'margin',
  'm',
  'marginTop',
  'mt',
  'marginRight',
  'mr',
  'marginBottom',
  'mb',
  'marginLeft',
  'ml',
  'mx',
  'my',
  'padding',
  'p',
  'paddingTop',
  'pt',
  'paddingRight',
  'pr',
  'paddingBottom',
  'pb',
  'paddingLeft',
  'pl',
  'px',
  'py',
  'fontFamily',
  'fontSize',
  'lineHeight',
  'fontWeight',
  'textAlign',
  'letterSpacing',
  'color',
  'textTransform',
  'row',
  'col',
]

const systemPropTypes = {
  row: [bool, object],
  col: [bool, number, string, object],
}

export function getSystemPropTypes(system) {
  if (!system) return {}
  return system.meta.props.reduce((obj, prop) => {
    obj[prop] = oneOfType(
      systemPropTypes[prop] || [number, string, object],
    ).desc(
      '[xstyled] See <a href="https://www.smooth-code.com/open-source/xstyled/docs/system-props/">xstyled documentation</a>',
    )
    return obj
  }, {})
}
