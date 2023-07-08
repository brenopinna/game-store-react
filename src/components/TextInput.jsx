/* eslint-disable react/prop-types */
export function TextInput({ id, label, state, setState, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        required
        value={state}
        onChange={(e) => setState(e.target.value)}
        id={id}
        {...props}
      />
    </div>
  )
}
