// Edit this file to change the drifting background code blocks.
// Everything here is generated fictional mech-driver flavor text.
// It is not copied from Linux, BattleTech, or any proprietary system.
export const transmissions = [
`/* atlas-class actuator bus: fictional */
static int gyro_sync_probe(struct mech_bus *bus) {
  if (!bus || !bus->gyro.clock) return -EAGAIN;
  bus->gyro.drift_ppm = calibrate_gyro(bus, STANCE_WALK);
  return register_mech_node(bus, "torso-yaw");
}`,
`irqreturn_t heat_sink_irq(int irq, void *opaque) {
  struct sink_bank *bank = opaque;
  bank->thermal_ticks++;
  if (bank->core_temp > HEAT_REDLINE)
    queue_coolant_flush(bank, FLUSH_EMERGENCY);
  return IRQ_HANDLED;
}`,
`#define MECH_MAGIC       0x4d454348
#define ARMOR_ABLATIVE   0x02
#define WALK_CYCLE_DIRTY 0x13
#define REACTOR_SLEEP_US 14400

struct armor_page {
  u16 facing;
  u16 integrity;
  u8  scorch_map[64];
};`,
`static void myomer_bundle_rebalance(struct myomer_ring *ring) {
  spin_lock(&ring->lock);
  ring->left_leg.load  = smooth_step(ring->left_leg.load);
  ring->right_leg.load = smooth_step(ring->right_leg.load);
  ring->epoch++;
  spin_unlock(&ring->lock);
}`,
`/* /dev/warhound -- fake driver telemetry */
while (pilot->neural_link == LINK_STABLE) {
  frame = read_cockpit_frame(chassis);
  if (frame.warn & WARN_HEAT) vent_heat_sink(chassis, BANK_A);
  if (frame.warn & WARN_GYRO) widen_stance(chassis);
}`,
`static int jumpjet_ioctl(struct file *f, unsigned int cmd, unsigned long arg) {
  switch (cmd) {
    case JUMPJET_PREHEAT: return plasma_preheat(arg);
    case JUMPJET_BURN:    return vector_burn(arg, SAFE_ARC_ONLY);
    default: return -ENOTTY;
  }
}`,
`struct cockpit_signal {
  enum signal_kind { SIG_LOCK, SIG_HEAT, SIG_TORSO, SIG_AMMO } kind;
  u64 tick;
  s16 pitch;
  s16 yaw;
  const char *chant;
};`,
`[mech0] link up: chassis=unknown reactor=online gyro=green
[mech0] subsystem registered: myomer-ring
[mech0] subsystem registered: heat-sink-bank
[mech0] subsystem registered: cockpit-raster`,
`static void ansi_raster_blit(struct tty_buffer *tty, const char *src) {
  for (; *src; src++) {
    if (*src == '\\x1b') parse_ansi_escape(&tty->ansi, src);
    else tty_put_glyph(tty, *src, PALETTE_SAND);
  }
}`,
`if (armor->front.integrity < ARMOR_CRITICAL) {
  log_warn("front plate failing");
  reroute_power(chassis, BUS_RIGHT_TORSO);
  redraw_damage_map(chassis->raster);
}`,
`MODULE_AUTHOR("khodges42");
MODULE_DESCRIPTION("fictional mech telemetry subsystem");
MODULE_LICENSE("GPL-3.0-or-later");`,
`static int cockpit_open(struct inode *inode, struct file *file) {
  file->private_data = current_chassis();
  pr_info("cockpit opened: raster=%s carrier=%d\\n", "AMBER", 9600);
  return 0;
}`,
`// not leaked code
// not a product funnel
// not a personal brand
// just notes, machines, rituals, fragments
// λ khodges42`,
`void raster_tick(struct cockpit_raster *r) {
  r->scanline = (r->scanline + 1) % 144;
  r->phase += 0.016;
  if (r->scanline == 0) swap_buffers(r);
}`,
`static const char *beliefs[] = {
  "computers should still feel magical",
  "hype scales faster than trust",
  "build tools that increase agency",
};`,
`[archive0] RX 0000002a bytes from /machines/voidlambda
[archive0] RX 000001ff bytes from /rituals/lbrp-and-lisp
[archive0] RX 0000007c bytes from /influences`,
`static int lrm_rack_cycle(struct missile_rack *rack) {
  if (rack->ammo == 0) return -ENODATA;
  rack->feed_motor.phase = MOTOR_ARMED;
  rack->doors = BAY_DOORS_OPEN;
  return queue_launch_solution(rack, INDIRECT_ARC);
}`,
`/* mech folklore table */
const struct sigil_route routes[] = {
  { "north", BUS_SENSOR_MAST,  WATCHDOG_OK },
  { "south", BUS_REACTOR_CORE, WATCHDOG_HOT },
  { "east",  BUS_RIGHT_ARM,    WATCHDOG_OK },
  { "west",  BUS_LEFT_ARM,     WATCHDOG_NOISY },
};`,
`static void damage_control_daemon(struct chassis *c) {
  while (!kthread_should_stop()) {
    seal_armor_breach(c);
    balance_reactor_load(c);
    msleep(2600);
  }
}`,
];
