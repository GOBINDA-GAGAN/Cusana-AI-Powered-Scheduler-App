<div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

  {/* Column 1 */}
  <div className="text-center lg:text-left">
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <h2 className="text-3xl font-bold">Scheduler</h2>
    </div>

    <p className="mt-5 max-w-sm text-gray-400 leading-7 mx-auto lg:mx-0">
      Organize your schedule, manage tasks, set reminders,
      and stay productive with one simple workspace.
    </p>

    <div className="mt-8 flex justify-center gap-3 lg:justify-start">
      {socialLinks?.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>

  {/* Column 2 */}
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Product
      </h3>

      <ul className="space-y-3">
        {footerLinks.Product.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-400 hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Resources
      </h3>

      <ul className="space-y-3">
        {footerLinks.Resources.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-400 hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Column 3 */}
  <div className="grid grid-cols-2 gap-8">
    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Company
      </h3>

      <ul className="space-y-3">
        {footerLinks.Company.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-400 hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Legal
      </h3>

      <ul className="space-y-3">
        {footerLinks.Legal.map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-400 hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

</div>