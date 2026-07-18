export default function SideGrid() {
  return (
    <>
      {/* Left Grid */}
      <div className="fixed left-0 top-0 h-screen w-16 lg:w-20 border-r-2 border-border bg-background">
        <div
          className="h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ececec 0px, #ececec 1px, transparent 1px, transparent 8px)",
          }}
        />
      </div>

      {/* Right Grid */}
      <div className="fixed right-0 top-0 h-screen w-16 lg:w-20 border-l-2  border-border bg-background">
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