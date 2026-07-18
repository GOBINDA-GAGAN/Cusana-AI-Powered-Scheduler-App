export default function SideGrid() {
  return (
    <>
      {/* Left Grid */}
      <div
        className="
          hidden
          sm:block
          fixed
          inset-y-0
          left-0
          z-10
          w-8
          md:w-10
          lg:w-14
          xl:w-20
          border-r
          border-border
          bg-background
        "
      >
        <div
          className="h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ececec 0px, #ececec 1px, transparent 1px, transparent 8px)",
          }}
        />
      </div>

      {/* Right Grid */}
      <div
        className="
          hidden
          sm:block
          fixed
          inset-y-0
          right-0
          z-10
          w-8
          md:w-10
          lg:w-14
          xl:w-20
          border-l
          border-border
          bg-background
        "
      >
        <div
          className="h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ececec 0px, #ececec 1px, transparent 1px, transparent 8px)",
          }}
        />
      </div>
    </>
  );
}