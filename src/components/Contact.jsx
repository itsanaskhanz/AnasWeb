export function Field({ id, label, placeholder, type = "text", textarea }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-xs uppercase tracking-wide text-white/60">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          rows={5}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30 focus:border-white/30"
          required
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30 focus:border-white/30"
          required={id !== "company"}
        />
      )}
    </label>
  );
}
